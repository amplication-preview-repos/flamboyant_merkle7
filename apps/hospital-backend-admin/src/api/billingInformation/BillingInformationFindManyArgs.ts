import { BillingInformationWhereInput } from "./BillingInformationWhereInput";
import { BillingInformationOrderByInput } from "./BillingInformationOrderByInput";

export type BillingInformationFindManyArgs = {
  where?: BillingInformationWhereInput;
  orderBy?: Array<BillingInformationOrderByInput>;
  skip?: number;
  take?: number;
};
