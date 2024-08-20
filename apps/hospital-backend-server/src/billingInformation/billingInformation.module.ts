import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BillingInformationModuleBase } from "./base/billingInformation.module.base";
import { BillingInformationService } from "./billingInformation.service";
import { BillingInformationController } from "./billingInformation.controller";
import { BillingInformationResolver } from "./billingInformation.resolver";

@Module({
  imports: [BillingInformationModuleBase, forwardRef(() => AuthModule)],
  controllers: [BillingInformationController],
  providers: [BillingInformationService, BillingInformationResolver],
  exports: [BillingInformationService],
})
export class BillingInformationModule {}
