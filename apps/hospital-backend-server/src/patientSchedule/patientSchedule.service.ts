import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatientScheduleServiceBase } from "./base/patientSchedule.service.base";

@Injectable()
export class PatientScheduleService extends PatientScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
