import { Injectable } from "@nestjs/common";
import { PatientAdmissionInput } from "../patientManagement/PatientAdmissionInput";

@Injectable()
export class PatientManagementService {
  constructor() {}
  async AdmitPatient(args: PatientAdmissionInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
