import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PatientScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PatientSchedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="appointmentDate" source="appointmentDate" />
        <TextField label="appointmentReason" source="appointmentReason" />
        <TextField label="appointmentTime" source="appointmentTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="doctorName" source="doctorName" />
        <TextField label="ID" source="id" />
        <TextField label="patientName" source="patientName" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
