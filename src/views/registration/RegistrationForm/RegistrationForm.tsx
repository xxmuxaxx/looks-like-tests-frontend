import { Navigate } from "react-router-dom";

import { Form } from "components/forms";
import { useRegistrationMutation } from "services/authApi";
import {
  registrationLayout,
  registrationSchema,
} from "./RegistrationForm.data";

export type RegistrationFormFields = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  phone?: string;
};

const initialValues: RegistrationFormFields = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  middleName: "",
  phone: "",
};

const RegistrationForm = () => {
  const [registration, { isLoading, isSuccess }] = useRegistrationMutation();

  const handleRegistration = (values: RegistrationFormFields) => {
    registration(values);
  };

  if (!isLoading && isSuccess) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Form
      initialValues={initialValues}
      validationSchema={registrationSchema}
      onSubmit={handleRegistration}
      layout={registrationLayout}
      isLoading={isLoading}
    />
  );
};

export default RegistrationForm;
