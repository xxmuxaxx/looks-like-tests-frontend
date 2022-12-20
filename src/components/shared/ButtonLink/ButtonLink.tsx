import { Link } from "react-router-dom";

import Button, { ButtonProps } from "../Button/Button";

type ButtonLinkProps = Omit<ButtonProps, "modifiers" | "onClick"> & {
  to: string;
};

const ButtonLink = ({ to, ...buttonProps }: ButtonLinkProps) => {
  return (
    <Link className="button-link" to={to}>
      <Button
        {...buttonProps}
        modifiers={["transparent", "inherit", "auto-width"]}
      />
    </Link>
  );
};

export default ButtonLink;
