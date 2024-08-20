import { PatientSchedule as TPatientSchedule } from "../api/patientSchedule/PatientSchedule";

export const PATIENTSCHEDULE_TITLE_FIELD = "doctorName";

export const PatientScheduleTitle = (record: TPatientSchedule): string => {
  return record.doctorName?.toString() || String(record.id);
};
