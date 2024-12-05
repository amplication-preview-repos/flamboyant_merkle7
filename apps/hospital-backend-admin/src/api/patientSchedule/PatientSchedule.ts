export type PatientSchedule = {
  appointmentDate: Date | null;
  appointmentReason: string | null;
  appointmentTime: string | null;
  createdAt: Date;
  doctorName: string | null;
  id: string;
  patientName: string | null;
  updatedAt: Date;
};
