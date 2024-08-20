import { SortOrder } from "../../util/SortOrder";

export type PatientRegistrationFormOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  emergencyContact?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
