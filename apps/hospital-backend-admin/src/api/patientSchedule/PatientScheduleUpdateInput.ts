export type PatientScheduleUpdateInput = {
  appointmentDate?: Date | null;
  appointmentReason?: string | null;
  appointmentTime?: string | null;
  doctorName?: string | null;
  patientName?: string | null;
};
