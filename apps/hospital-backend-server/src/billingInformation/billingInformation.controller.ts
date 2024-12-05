import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BillingInformationService } from "./billingInformation.service";
import { BillingInformationControllerBase } from "./base/billingInformation.controller.base";

@swagger.ApiTags("billingInformations")
@common.Controller("billingInformations")
export class BillingInformationController extends BillingInformationControllerBase {
  constructor(
    protected readonly service: BillingInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
