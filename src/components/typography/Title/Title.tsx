import { HTMLAttributes } from "react";
import classNames from "classnames";

import "./Title.scss";

type TitleProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HTMLAttributes<HTMLHeadingElement>;

const Title = ({ variant, className, children, ...restProps }: TitleProps) => {
  const Tag = variant;

  return (
    <Tag {...restProps} className={classNames(className, variant)}>
      {children}
    </Tag>
  );
};

export default Title;
