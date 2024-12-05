import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PatientRegistrationFormWhereInput = {
  address?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  emergencyContact?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
