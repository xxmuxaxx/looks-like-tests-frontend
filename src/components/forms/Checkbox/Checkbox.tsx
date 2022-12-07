import { InputHTMLAttributes } from "react";

import { Done } from "components/icons";

import "./Checkbox.scss";

export type CheckboxProps = {
  error?: boolean;
  children: React.ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export const Checkbox = ({ error, children, ...restProps }: CheckboxProps) => {
  return (
    <label className="checkbox">
      <input {...restProps} className="checkbox__input" type="checkbox" />

      <div className="checkbox__custom">
        <Done className="checkbox__icon" />
      </div>

      <span className="checkbox__text">{children}</span>
    </label>
  );
};
