import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PatientScheduleController } from "../patientSchedule.controller";
import { PatientScheduleService } from "../patientSchedule.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  appointmentDate: new Date(),
  appointmentReason: "exampleAppointmentReason",
  appointmentTime: "exampleAppointmentTime",
  createdAt: new Date(),
  doctorName: "exampleDoctorName",
  id: "exampleId",
  patientName: "examplePatientName",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  appointmentDate: new Date(),
  appointmentReason: "exampleAppointmentReason",
  appointmentTime: "exampleAppointmentTime",
  createdAt: new Date(),
  doctorName: "exampleDoctorName",
  id: "exampleId",
  patientName: "examplePatientName",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    appointmentDate: new Date(),
    appointmentReason: "exampleAppointmentReason",
    appointmentTime: "exampleAppointmentTime",
    createdAt: new Date(),
    doctorName: "exampleDoctorName",
    id: "exampleId",
    patientName: "examplePatientName",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  appointmentDate: new Date(),
  appointmentReason: "exampleAppointmentReason",
  appointmentTime: "exampleAppointmentTime",
  createdAt: new Date(),
  doctorName: "exampleDoctorName",
  id: "exampleId",
  patientName: "examplePatientName",
  updatedAt: new Date(),
};

const service = {
  createPatientSchedule() {
    return CREATE_RESULT;
  },
  patientSchedules: () => FIND_MANY_RESULT,
  patientSchedule: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("PatientSchedule", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PatientScheduleService,
          useValue: service,
        },
      ],
      controllers: [PatientScheduleController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /patientSchedules", async () => {
    await request(app.getHttpServer())
      .post("/patientSchedules")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        appointmentDate: CREATE_RESULT.appointmentDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /patientSchedules", async () => {
    await request(app.getHttpServer())
      .get("/patientSchedules")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          appointmentDate: FIND_MANY_RESULT[0].appointmentDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /patientSchedules/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/patientSchedules"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /patientSchedules/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/patientSchedules"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        appointmentDate: FIND_ONE_RESULT.appointmentDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /patientSchedules existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/patientSchedules")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        appointmentDate: CREATE_RESULT.appointmentDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/patientSchedules")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
