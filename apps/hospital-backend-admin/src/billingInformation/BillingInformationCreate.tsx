import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BillingInformationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="billingDate" source="billingDate" />
        <TextInput label="billingDetails" multiline source="billingDetails" />
        <TextInput label="patientName" source="patientName" />
      </SimpleForm>
    </Create>
  );
};
