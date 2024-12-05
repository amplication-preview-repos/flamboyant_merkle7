import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PatientRegistrationFormModuleBase } from "./base/patientRegistrationForm.module.base";
import { PatientRegistrationFormService } from "./patientRegistrationForm.service";
import { PatientRegistrationFormController } from "./patientRegistrationForm.controller";
import { PatientRegistrationFormResolver } from "./patientRegistrationForm.resolver";

@Module({
  imports: [PatientRegistrationFormModuleBase, forwardRef(() => AuthModule)],
  controllers: [PatientRegistrationFormController],
  providers: [PatientRegistrationFormService, PatientRegistrationFormResolver],
  exports: [PatientRegistrationFormService],
})
export class PatientRegistrationFormModule {}
