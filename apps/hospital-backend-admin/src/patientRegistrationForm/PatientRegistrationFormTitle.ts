import { PatientRegistrationForm as TPatientRegistrationForm } from "../api/patientRegistrationForm/PatientRegistrationForm";

export const PATIENTREGISTRATIONFORM_TITLE_FIELD = "fullName";

export const PatientRegistrationFormTitle = (
  record: TPatientRegistrationForm
): string => {
  return record.fullName?.toString() || String(record.id);
};
