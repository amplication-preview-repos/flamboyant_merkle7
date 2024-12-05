import { SortOrder } from "../../util/SortOrder";

export type PatientScheduleOrderByInput = {
  appointmentDate?: SortOrder;
  appointmentReason?: SortOrder;
  appointmentTime?: SortOrder;
  createdAt?: SortOrder;
  doctorName?: SortOrder;
  id?: SortOrder;
  patientName?: SortOrder;
  updatedAt?: SortOrder;
};
