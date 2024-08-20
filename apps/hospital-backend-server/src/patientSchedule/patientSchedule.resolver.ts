import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PatientScheduleResolverBase } from "./base/patientSchedule.resolver.base";
import { PatientSchedule } from "./base/PatientSchedule";
import { PatientScheduleService } from "./patientSchedule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PatientSchedule)
export class PatientScheduleResolver extends PatientScheduleResolverBase {
  constructor(
    protected readonly service: PatientScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
