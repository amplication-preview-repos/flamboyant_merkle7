/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { BillingInformation } from "./BillingInformation";
import { BillingInformationCountArgs } from "./BillingInformationCountArgs";
import { BillingInformationFindManyArgs } from "./BillingInformationFindManyArgs";
import { BillingInformationFindUniqueArgs } from "./BillingInformationFindUniqueArgs";
import { CreateBillingInformationArgs } from "./CreateBillingInformationArgs";
import { UpdateBillingInformationArgs } from "./UpdateBillingInformationArgs";
import { DeleteBillingInformationArgs } from "./DeleteBillingInformationArgs";
import { BillingInformationService } from "../billingInformation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BillingInformation)
export class BillingInformationResolverBase {
  constructor(
    protected readonly service: BillingInformationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BillingInformation",
    action: "read",
    possession: "any",
  })
  async _billingInformationsMeta(
    @graphql.Args() args: BillingInformationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BillingInformation])
  @nestAccessControl.UseRoles({
    resource: "BillingInformation",
    action: "read",
    possession: "any",
  })
  async billingInformations(
    @graphql.Args() args: BillingInformationFindManyArgs
  ): Promise<BillingInformation[]> {
    return this.service.billingInformations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BillingInformation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BillingInformation",
    action: "read",
    possession: "own",
  })
  async billingInformation(
    @graphql.Args() args: BillingInformationFindUniqueArgs
  ): Promise<BillingInformation | null> {
    const result = await this.service.billingInformation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BillingInformation)
  @nestAccessControl.UseRoles({
    resource: "BillingInformation",
    action: "create",
    possession: "any",
  })
  async createBillingInformation(
    @graphql.Args() args: CreateBillingInformationArgs
  ): Promise<BillingInformation> {
    return await this.service.createBillingInformation({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BillingInformation)
  @nestAccessControl.UseRoles({
    resource: "BillingInformation",
    action: "update",
    possession: "any",
  })
  async updateBillingInformation(
    @graphql.Args() args: UpdateBillingInformationArgs
  ): Promise<BillingInformation | null> {
    try {
      return await this.service.updateBillingInformation({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BillingInformation)
  @nestAccessControl.UseRoles({
    resource: "BillingInformation",
    action: "delete",
    possession: "any",
  })
  async deleteBillingInformation(
    @graphql.Args() args: DeleteBillingInformationArgs
  ): Promise<BillingInformation | null> {
    try {
      return await this.service.deleteBillingInformation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
