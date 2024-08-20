import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatientRegistrationFormServiceBase } from "./base/patientRegistrationForm.service.base";

@Injectable()
export class PatientRegistrationFormService extends PatientRegistrationFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
