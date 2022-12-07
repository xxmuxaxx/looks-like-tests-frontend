import { Checkbox, CheckboxProps } from "../Checkbox/Checkbox";
import Input, { InputProps } from "../Input/Input";

type FormFieldType = {
  name: string;
  label: string;
  type: "string" | "password" | "checkbox";
} & (InputProps | CheckboxProps);

const FormField = ({ label, type, ...restProps }: FormFieldType) => {
  switch (type) {
    case "string":
    case "password":
      return <Input label={label} type={type} {...restProps} />;

    case "checkbox":
      return <Checkbox {...restProps}>{label}</Checkbox>;

    default:
      return null;
  }
};

export default FormField;
