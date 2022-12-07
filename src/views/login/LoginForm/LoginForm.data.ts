import * as yup from "yup";

import { FormLayout } from "components/forms";
import { LoginFormFields } from "./LoginForm";

export const loginLayout: FormLayout<LoginFormFields> = [
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

export const loginSchema = yup.object().shape({
  email: yup
    .string() /* .email("invalid email") */
    .required("required"),
  password: yup.string().required("required"),
  rememberMe: yup.bool(),
});
