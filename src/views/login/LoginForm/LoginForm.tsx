import React from "react";
import * as yup from "yup";

import { Form } from "components/forms";
import type { FormLayout } from "components/forms";

import "./LoginForm.scss";

export type LoginFormFields = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const initialValues: LoginFormFields = {
  email: "",
  password: "",
  rememberMe: false,
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
          { name: "password", type: "password", label: "Пароль" },
          { name: "rememberMe", type: "checkbox", label: "Запомнить меня" },
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
  email: yup
    .string() /* .email("invalid email") */
    .required("required"),
  password: yup.string().required("required"),
  rememberMe: yup.bool(),
});

type LoginFormProps = {
  isLoading: boolean;
  onSubmit: (values: LoginFormFields) => void;
};

const LoginForm = ({ isLoading, onSubmit }: LoginFormProps) => {
  return (
    <div>
      <Form<LoginFormFields>
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        layout={layout}
        isLoading={isLoading}
      />
    </div>
  );
};

export default LoginForm;
