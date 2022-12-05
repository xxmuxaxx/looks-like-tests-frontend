import classNames from "classnames";
import React, { useMemo } from "react";

import "./Button.scss";

type ButtonProps = {
  modifiers?: ("second" | "small" | "auto-width")[];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, modifiers, ...restProps }: ButtonProps) => {
  const modifierClasses = useMemo(() => {
    if (!modifiers) return;
    const classes = modifiers?.map((modifier) => `button--${modifier}`);
    return [...new Set(classes)];
  }, [modifiers]);

  return (
    <button
      className={classNames("button", modifierClasses, className)}
      {...restProps}
    />
  );
};

export default Button;
