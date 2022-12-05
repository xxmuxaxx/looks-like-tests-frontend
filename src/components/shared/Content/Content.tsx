import classNames from "classnames";
import React from "react";

import "./Content.scss";

type ContentProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Content = ({ children, className, ...restProps }: ContentProps) => {
  return (
    <div className={classNames("content", className)} {...restProps}>
      {children}
    </div>
  );
};

export default Content;
