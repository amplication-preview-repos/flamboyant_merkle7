import { PatientRegistrationFormWhereInput } from "./PatientRegistrationFormWhereInput";
import { PatientRegistrationFormOrderByInput } from "./PatientRegistrationFormOrderByInput";

export type PatientRegistrationFormFindManyArgs = {
  where?: PatientRegistrationFormWhereInput;
  orderBy?: Array<PatientRegistrationFormOrderByInput>;
  skip?: number;
  take?: number;
};
