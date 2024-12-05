import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PatientScheduleWhereInput = {
  appointmentDate?: DateTimeNullableFilter;
  appointmentReason?: StringNullableFilter;
  appointmentTime?: StringNullableFilter;
  doctorName?: StringNullableFilter;
  id?: StringFilter;
  patientName?: StringNullableFilter;
};
