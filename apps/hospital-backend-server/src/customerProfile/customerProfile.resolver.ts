import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerProfileResolverBase } from "./base/customerProfile.resolver.base";
import { CustomerProfile } from "./base/CustomerProfile";
import { CustomerProfileService } from "./customerProfile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerProfile)
export class CustomerProfileResolver extends CustomerProfileResolverBase {
  constructor(
    protected readonly service: CustomerProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
