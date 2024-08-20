import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PatientScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="appointmentDate" source="appointmentDate" />
        <TextField label="appointmentReason" source="appointmentReason" />
        <TextField label="appointmentTime" source="appointmentTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="doctorName" source="doctorName" />
        <TextField label="ID" source="id" />
        <TextField label="patientName" source="patientName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
