import * as yup from "yup";

import { FormLayout } from "components/forms";
import { getRegEpx } from "utils/helpers";
import { RegistrationFormFields } from "./RegistrationForm";

export const registrationLayout: FormLayout<RegistrationFormFields> = [
  {
    type: "section",
    children: [
      {
        type: "fields",
        columns: 2,
        gap: 10,
        children: [
          { name: "email", type: "string", label: "Email" },
          { name: "password", type: "password", label: "Пароль" },
          { name: "firstName", type: "string", label: "Имя" },
          { name: "lastName", type: "string", label: "Фамилия" },
          { name: "middleName", type: "string", label: "Отчество" },
          { name: "phone", type: "string", label: "Телефон" },
        ],
      },
    ],
  },
  {
    type: "actions",
    children: [
      {
        type: "submit",
        text: "Зарегистрироваться",
      },
      {
        type: "link",
        text: "Войти",
        to: "/login",
      },
    ],
  },
];

export const registrationSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  middleName: yup.string().required("required"),
  phone: yup.string().matches(getRegEpx.phone),
});
