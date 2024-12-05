import * as graphql from "@nestjs/graphql";
import { PatientAdmissionInput } from "../patientManagement/PatientAdmissionInput";
import { PatientManagementService } from "./patientmanagement.service";

export class PatientManagementResolver {
  constructor(protected readonly service: PatientManagementService) {}

  @graphql.Mutation(() => String)
  async AdmitPatient(
    @graphql.Args()
    args: PatientAdmissionInput
  ): Promise<string> {
    return this.service.AdmitPatient(args);
  }
}
