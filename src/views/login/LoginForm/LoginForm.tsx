import React from "react";
import * as yup from "yup";

import { Form } from "components/forms";
import type { FormLayout } from "components/forms";

import "./LoginForm.scss";

type LoginFormFields = {
  email: string;
  password: string;
};

const initialValues: LoginFormFields = {
  email: "",
  password: "",
};

const layout: FormLayout<LoginFormFields> = [
  {
    type: "section",
    children: [
      {
        type: "fields",
        columns: 1,
        gap: 20,
        children: [
          { name: "email", type: "string", label: "Email" },
          { name: "password", type: "password", label: "Password" },
        ],
      },
    ],
  },
  {
    type: "actions",
    children: [
      {
        type: "submit",
        text: "Войти",
      },
    ],
  },
];

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

type LoginFormProps = {
  onSubmit: (values: LoginFormFields) => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  return (
    <div>
      <Form<LoginFormFields>
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        layout={layout}
      />
    </div>
  );
};

export default LoginForm;
