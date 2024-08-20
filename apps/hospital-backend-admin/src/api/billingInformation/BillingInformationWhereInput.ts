import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BillingInformationWhereInput = {
  amount?: FloatNullableFilter;
  billingDate?: DateTimeNullableFilter;
  billingDetails?: StringNullableFilter;
  id?: StringFilter;
  patientName?: StringNullableFilter;
};
