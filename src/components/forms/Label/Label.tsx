import React from "react";
import classNames from "classnames";

import { Cross, Done } from "components/icons";

import "./Label.scss";

export type LabelProps = {
  label: string;
  className?: string;
  status?: "done" | "fail";
  error?: boolean;
  children: React.ReactNode;
};

const Label = ({ label, className, status, error, children }: LabelProps) => {
  const getIcon = (status: "done" | "fail") => {
    switch (status) {
      case "done":
        return <Done width="12" height="10" />;
      case "fail":
        return <Cross width="12" height="12" />;
    }
  };

  return (
    <label className={classNames("label", error && "error", status, className)}>
      {status ? <div className="label__icon">{getIcon(status)}</div> : null}
      {children}
      <p>{label}</p>
    </label>
  );
};

export default Label;
