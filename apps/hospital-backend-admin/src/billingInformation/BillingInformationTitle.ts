import { BillingInformation as TBillingInformation } from "../api/billingInformation/BillingInformation";

export const BILLINGINFORMATION_TITLE_FIELD = "patientName";

export const BillingInformationTitle = (
  record: TBillingInformation
): string => {
  return record.patientName?.toString() || String(record.id);
};
