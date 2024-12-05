import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BillingInformationResolverBase } from "./base/billingInformation.resolver.base";
import { BillingInformation } from "./base/BillingInformation";
import { BillingInformationService } from "./billingInformation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BillingInformation)
export class BillingInformationResolver extends BillingInformationResolverBase {
  constructor(
    protected readonly service: BillingInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
