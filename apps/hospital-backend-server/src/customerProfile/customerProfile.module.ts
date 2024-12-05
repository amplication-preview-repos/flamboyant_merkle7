import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerProfileModuleBase } from "./base/customerProfile.module.base";
import { CustomerProfileService } from "./customerProfile.service";
import { CustomerProfileController } from "./customerProfile.controller";
import { CustomerProfileResolver } from "./customerProfile.resolver";

@Module({
  imports: [CustomerProfileModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerProfileController],
  providers: [CustomerProfileService, CustomerProfileResolver],
  exports: [CustomerProfileService],
})
export class CustomerProfileModule {}
