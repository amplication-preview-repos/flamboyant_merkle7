import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PatientManagementService } from "./patientmanagement.service";
import { PatientAdmissionInput } from "../patientManagement/PatientAdmissionInput";

@swagger.ApiTags("patientManagements")
@common.Controller("patientManagements")
export class PatientManagementController {
  constructor(protected readonly service: PatientManagementService) {}

  @common.Post("admission")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdmitPatient(
    @common.Body()
    body: PatientAdmissionInput
  ): Promise<string> {
        return this.service.AdmitPatient(body);
      }
}
