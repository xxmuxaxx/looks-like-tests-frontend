import React from "react";
import classNames from "classnames";

import "./InputBase.scss";

export type InputBaseProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputBase = ({ className, ...restProps }: InputBaseProps) => {
  return <input className={classNames("input", className)} {...restProps} />;
};

export default InputBase;
