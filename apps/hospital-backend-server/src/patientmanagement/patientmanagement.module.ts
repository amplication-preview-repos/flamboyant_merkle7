import { Module } from "@nestjs/common";
import { PatientManagementService } from "./patientmanagement.service";
import { PatientManagementController } from "./patientmanagement.controller";
import { PatientManagementResolver } from "./patientmanagement.resolver";

@Module({
  controllers: [PatientManagementController],
  providers: [PatientManagementService, PatientManagementResolver],
  exports: [PatientManagementService],
})
export class PatientManagementModule {}
