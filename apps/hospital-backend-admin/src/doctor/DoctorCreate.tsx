import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DoctorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="specialization" source="specialization" />
      </SimpleForm>
    </Create>
  );
};
