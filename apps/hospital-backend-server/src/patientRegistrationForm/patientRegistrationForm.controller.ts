import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PatientRegistrationFormService } from "./patientRegistrationForm.service";
import { PatientRegistrationFormControllerBase } from "./base/patientRegistrationForm.controller.base";

@swagger.ApiTags("patientRegistrationForms")
@common.Controller("patientRegistrationForms")
export class PatientRegistrationFormController extends PatientRegistrationFormControllerBase {
  constructor(
    protected readonly service: PatientRegistrationFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
