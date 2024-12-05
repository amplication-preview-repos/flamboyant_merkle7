import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PatientRegistrationFormResolverBase } from "./base/patientRegistrationForm.resolver.base";
import { PatientRegistrationForm } from "./base/PatientRegistrationForm";
import { PatientRegistrationFormService } from "./patientRegistrationForm.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PatientRegistrationForm)
export class PatientRegistrationFormResolver extends PatientRegistrationFormResolverBase {
  constructor(
    protected readonly service: PatientRegistrationFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
