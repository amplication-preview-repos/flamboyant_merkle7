/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BillingInformationService } from "../billingInformation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BillingInformationCreateInput } from "./BillingInformationCreateInput";
import { BillingInformation } from "./BillingInformation";
import { BillingInformationFindManyArgs } from "./BillingInformationFindManyArgs";
import { BillingInformationWhereUniqueInput } from "./BillingInformationWhereUniqueInput";
import { BillingInformationUpdateInput } from "./BillingInformationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BillingInformationControllerBase {
  constructor(
    protected readonly service: BillingInformationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BillingInformation })
  @nestAccessControl.UseRoles({
    resource: "BillingInformation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBillingInformation(
    @common.Body() data: BillingInformationCreateInput
  ): Promise<BillingInformation> {
    return await this.service.createBillingInformation({
      data: data,
      select: {
        amount: true,
        billingDate: true,
        billingDetails: true,
        createdAt: true,
        id: true,
        patientName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [BillingInformation] })
  @ApiNestedQuery(BillingInformationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BillingInformation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async billingInformations(
    @common.Req() request: Request
  ): Promise<BillingInformation[]> {
    const args = plainToClass(BillingInformationFindManyArgs, request.query);
    return this.service.billingInformations({
      ...args,
      select: {
        amount: true,
        billingDate: true,
        billingDetails: true,
        createdAt: true,
        id: true,
        patientName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BillingInformation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BillingInformation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async billingInformation(
    @common.Param() params: BillingInformationWhereUniqueInput
  ): Promise<BillingInformation | null> {
    const result = await this.service.billingInformation({
      where: params,
      select: {
        amount: true,
        billingDate: true,
        billingDetails: true,
        createdAt: true,
        id: true,
        patientName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BillingInformation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BillingInformation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBillingInformation(
    @common.Param() params: BillingInformationWhereUniqueInput,
    @common.Body() data: BillingInformationUpdateInput
  ): Promise<BillingInformation | null> {
    try {
      return await this.service.updateBillingInformation({
        where: params,
        data: data,
        select: {
          amount: true,
          billingDate: true,
          billingDetails: true,
          createdAt: true,
          id: true,
          patientName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BillingInformation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BillingInformation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBillingInformation(
    @common.Param() params: BillingInformationWhereUniqueInput
  ): Promise<BillingInformation | null> {
    try {
      return await this.service.deleteBillingInformation({
        where: params,
        select: {
          amount: true,
          billingDate: true,
          billingDetails: true,
          createdAt: true,
          id: true,
          patientName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
