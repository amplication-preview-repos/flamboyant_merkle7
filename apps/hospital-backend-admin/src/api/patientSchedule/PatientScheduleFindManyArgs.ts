import { PatientScheduleWhereInput } from "./PatientScheduleWhereInput";
import { PatientScheduleOrderByInput } from "./PatientScheduleOrderByInput";

export type PatientScheduleFindManyArgs = {
  where?: PatientScheduleWhereInput;
  orderBy?: Array<PatientScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
