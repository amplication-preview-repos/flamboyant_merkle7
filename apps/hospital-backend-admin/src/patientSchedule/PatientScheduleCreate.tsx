import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PatientScheduleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="appointmentDate" source="appointmentDate" />
        <TextInput
          label="appointmentReason"
          multiline
          source="appointmentReason"
        />
        <TextInput label="appointmentTime" source="appointmentTime" />
        <TextInput label="doctorName" source="doctorName" />
        <TextInput label="patientName" source="patientName" />
      </SimpleForm>
    </Create>
  );
};
