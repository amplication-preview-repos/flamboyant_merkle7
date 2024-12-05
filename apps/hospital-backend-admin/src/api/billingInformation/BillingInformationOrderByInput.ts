import { SortOrder } from "../../util/SortOrder";

export type BillingInformationOrderByInput = {
  amount?: SortOrder;
  billingDate?: SortOrder;
  billingDetails?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  patientName?: SortOrder;
  updatedAt?: SortOrder;
};
