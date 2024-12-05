import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PatientRegistrationFormCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="emergencyContact" source="emergencyContact" />
        <TextInput label="fullName" source="fullName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
