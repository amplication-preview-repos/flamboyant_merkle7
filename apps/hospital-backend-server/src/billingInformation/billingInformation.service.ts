import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BillingInformationServiceBase } from "./base/billingInformation.service.base";

@Injectable()
export class BillingInformationService extends BillingInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
