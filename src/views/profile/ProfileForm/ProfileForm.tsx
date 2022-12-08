import { FormikHelpers } from "formik";

import { Form } from "components/forms";
import { profileFormLayout, profileFormSchema } from "./ProfileForm.data";
import { useProtectedAuth } from "store/auth";

export type ProfileFormFields = {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email: string;
  phone?: string;
  newPassword: string;
  confirmPassword: string;
};

const ProfileForm = () => {
  const { user } = useProtectedAuth();

  const initialValues: ProfileFormFields = {
    firstName: user.firstName,
    lastName: user.lastName,
    middleName: user.middleName,
    email: user.username,
    phone: user.phone,
    newPassword: "",
    confirmPassword: "",
  };

  const handleSubmit = (
    values: ProfileFormFields,
    helpers: FormikHelpers<ProfileFormFields>
  ) => {
    const data: any = {};

    for (const name in values) {
      const key = name as keyof ProfileFormFields;

      if (values[key] !== initialValues[key]) {
        ["newPassword", "confirmPassword"].includes(key)
          ? (data["password"] = values[key])
          : (data[key] = values[key]);
      }
    }

    console.log(data);
  };

  return (
    <Form
      initialValues={initialValues}
      validationSchema={profileFormSchema}
      layout={profileFormLayout}
      onSubmit={handleSubmit}
    />
  );
};

export default ProfileForm;
