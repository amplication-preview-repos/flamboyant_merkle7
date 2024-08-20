import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerProfileService } from "./customerProfile.service";
import { CustomerProfileControllerBase } from "./base/customerProfile.controller.base";

@swagger.ApiTags("customerProfiles")
@common.Controller("customerProfiles")
export class CustomerProfileController extends CustomerProfileControllerBase {
  constructor(
    protected readonly service: CustomerProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
