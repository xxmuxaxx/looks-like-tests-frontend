import "./FormSection.scss";

type FormSectionProps = {
  children: React.ReactNode;
};

const FormSection = ({ children }: FormSectionProps) => {
  return <div className="form-section">{children}</div>;
};

export default FormSection;
