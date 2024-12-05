import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BillingInformationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="billingDate" source="billingDate" />
        <TextInput label="billingDetails" multiline source="billingDetails" />
        <TextInput label="patientName" source="patientName" />
      </SimpleForm>
    </Edit>
  );
};
