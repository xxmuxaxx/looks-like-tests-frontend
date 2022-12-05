import React from "react";

import "./FormActions.scss";

type FormActionsProps = {
  children: React.ReactNode;
};

const FormActions = ({ children }: FormActionsProps) => {
  return <div className="form-actions">{children}</div>;
};

export default FormActions;
