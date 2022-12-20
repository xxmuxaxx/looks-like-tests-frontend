import { Button, ButtonLink } from "components/shared";
import { ActionItem } from "../Form/Form.types";

type FormActionProps = ActionItem & {
  disabled?: boolean;
  onReset?: () => void;
};

const FormAction = ({ type, disabled, text, to, onReset }: FormActionProps) => {
  switch (type) {
    case "submit":
      return <Button {...{ type, disabled }}>{text}</Button>;

    case "reset":
      return (
        <Button
          modifiers={["auto-width", "second"]}
          {...{ type, disabled }}
          onClick={onReset}
        >
          {text}
        </Button>
      );

    case "link":
      if (!to) throw new Error("для типа link параметр 'to' обязателен");
      return <ButtonLink to={to}>{text}</ButtonLink>;
  }
};

export default FormAction;
