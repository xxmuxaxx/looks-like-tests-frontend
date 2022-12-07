import { Link } from "react-router-dom";
import { CSSProperties, FC } from "react";

import "./Empty.scss";
import classNames from "classnames";

type EmptyProps = {
  title?: string;
  text?: string;
  link?: {
    text: string;
    to: string;
  };
  style?: CSSProperties;
  className?: string;
};

const Empty: FC<EmptyProps> = ({
  title = "Ничего не найдено",
  text,
  link,
  className,
  ...restProps
}) => (
  <div className={classNames(className, "empty")} {...restProps}>
    <p className="empty__title">{title}</p>
    {text && <div className="empty__description">{text}</div>}
    {link && (
      <div className="empty__actions">
        <Link to={link.to} className="button">
          {link.text}
        </Link>
      </div>
    )}
  </div>
);

export default Empty;
