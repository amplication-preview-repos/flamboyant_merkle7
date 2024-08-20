import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PatientScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
