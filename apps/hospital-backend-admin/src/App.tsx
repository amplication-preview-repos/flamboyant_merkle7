import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomerProfileList } from "./customerProfile/CustomerProfileList";
import { CustomerProfileCreate } from "./customerProfile/CustomerProfileCreate";
import { CustomerProfileEdit } from "./customerProfile/CustomerProfileEdit";
import { CustomerProfileShow } from "./customerProfile/CustomerProfileShow";
import { PatientScheduleList } from "./patientSchedule/PatientScheduleList";
import { PatientScheduleCreate } from "./patientSchedule/PatientScheduleCreate";
import { PatientScheduleEdit } from "./patientSchedule/PatientScheduleEdit";
import { PatientScheduleShow } from "./patientSchedule/PatientScheduleShow";
import { DoctorList } from "./doctor/DoctorList";
import { DoctorCreate } from "./doctor/DoctorCreate";
import { DoctorEdit } from "./doctor/DoctorEdit";
import { DoctorShow } from "./doctor/DoctorShow";
import { PatientRegistrationFormList } from "./patientRegistrationForm/PatientRegistrationFormList";
import { PatientRegistrationFormCreate } from "./patientRegistrationForm/PatientRegistrationFormCreate";
import { PatientRegistrationFormEdit } from "./patientRegistrationForm/PatientRegistrationFormEdit";
import { PatientRegistrationFormShow } from "./patientRegistrationForm/PatientRegistrationFormShow";
import { BillingInformationList } from "./billingInformation/BillingInformationList";
import { BillingInformationCreate } from "./billingInformation/BillingInformationCreate";
import { BillingInformationEdit } from "./billingInformation/BillingInformationEdit";
import { BillingInformationShow } from "./billingInformation/BillingInformationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HospitalBackend"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CustomerProfile"
          list={CustomerProfileList}
          edit={CustomerProfileEdit}
          create={CustomerProfileCreate}
          show={CustomerProfileShow}
        />
        <Resource
          name="PatientSchedule"
          list={PatientScheduleList}
          edit={PatientScheduleEdit}
          create={PatientScheduleCreate}
          show={PatientScheduleShow}
        />
        <Resource
          name="Doctor"
          list={DoctorList}
          edit={DoctorEdit}
          create={DoctorCreate}
          show={DoctorShow}
        />
        <Resource
          name="PatientRegistrationForm"
          list={PatientRegistrationFormList}
          edit={PatientRegistrationFormEdit}
          create={PatientRegistrationFormCreate}
          show={PatientRegistrationFormShow}
        />
        <Resource
          name="BillingInformation"
          list={BillingInformationList}
          edit={BillingInformationEdit}
          create={BillingInformationCreate}
          show={BillingInformationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
