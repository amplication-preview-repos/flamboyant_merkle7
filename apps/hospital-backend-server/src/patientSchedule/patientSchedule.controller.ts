import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PatientScheduleService } from "./patientSchedule.service";
import { PatientScheduleControllerBase } from "./base/patientSchedule.controller.base";

@swagger.ApiTags("patientSchedules")
@common.Controller("patientSchedules")
export class PatientScheduleController extends PatientScheduleControllerBase {
  constructor(
    protected readonly service: PatientScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
