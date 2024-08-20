import { CustomerProfile as TCustomerProfile } from "../api/customerProfile/CustomerProfile";

export const CUSTOMERPROFILE_TITLE_FIELD = "firstName";

export const CustomerProfileTitle = (record: TCustomerProfile): string => {
  return record.firstName?.toString() || String(record.id);
};
