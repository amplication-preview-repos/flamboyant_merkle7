import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PatientScheduleModuleBase } from "./base/patientSchedule.module.base";
import { PatientScheduleService } from "./patientSchedule.service";
import { PatientScheduleController } from "./patientSchedule.controller";
import { PatientScheduleResolver } from "./patientSchedule.resolver";

@Module({
  imports: [PatientScheduleModuleBase, forwardRef(() => AuthModule)],
  controllers: [PatientScheduleController],
  providers: [PatientScheduleService, PatientScheduleResolver],
  exports: [PatientScheduleService],
})
export class PatientScheduleModule {}
