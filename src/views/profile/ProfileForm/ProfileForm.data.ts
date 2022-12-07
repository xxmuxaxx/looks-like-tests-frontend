import * as yup from "yup";

import { FormLayout } from "components/forms";
import { getRegEpx } from "utils/helpers";
import { ProfileFormFields } from "./ProfileForm";

export const profileFormLayout: FormLayout<ProfileFormFields> = [
  {
    type: "section",
    children: [
      {
        type: "title",
        text: "Личные данные",
      },
      {
        type: "fields",
        columns: 3,
        gap: 20,
        children: [
          {
            type: "string",
            name: "firstName",
            label: "Имя",
          },
          {
            type: "string",
            name: "lastName",
            label: "Фамилия",
          },
          {
            type: "string",
            name: "middleName",
            label: "Отчество",
          },
          {
            type: "string",
            name: "email",
            label: "Почта",
          },
          {
            type: "string",
            name: "phone",
            label: "Телефон",
          },
        ],
      },
    ],
  },
  {
    type: "section",
    children: [
      {
        type: "title",
        text: "Безопасность",
      },
      {
        type: "fields",
        columns: 3,
        gap: 20,
        children: [
          {
            type: "password",
            name: "newPassword",
            label: "Пароль",
          },
          {
            type: "password",
            name: "confirmPassword",
            label: "Подтверждение пароля",
          },
        ],
      },
    ],
  },
  {
    type: "actions",
    children: [
      {
        type: "submit",
        text: "Сохранить изменения",
      },
      {
        type: "reset",
        text: "Отменить",
      },
    ],
  },
];

const phoneRegExp = getRegEpx.phone;

export const profileFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  phone: yup.string().matches(phoneRegExp),
  newPassword: yup.string().min(6),
  confirmPassword: yup.string().when("newPassword", {
    is: (val?: string) => val && val.length > 0,
    then: yup
      .string()
      .oneOf([yup.ref("newPassword")])
      .required(),
  }),
});
