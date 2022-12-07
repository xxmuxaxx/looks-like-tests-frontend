import classNames from "classnames";

import InputBase, { InputBaseProps } from "../InputBase/InputBase";
import Label, { LabelProps } from "../Label/Label";

import "./Input.scss";

export type InputProps = InputBaseProps & Omit<LabelProps, "children">;

const Input = ({
  label,
  className,
  status,
  error,
  ...restProps
}: InputProps) => {
  return (
    <Label
      className={classNames("input-label", className)}
      label={label}
      status={status}
      error={error}
    >
      <InputBase {...restProps} />
    </Label>
  );
};

export default Input;
