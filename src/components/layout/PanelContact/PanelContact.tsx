import "./PanelContact.scss";

type PanelContactProps = {
  email: string;
};

const PanelContact = ({ email }: PanelContactProps) => (
  <p className="panel-contact">
    В случае возникновения проблем: <a href={`mailto:${email}`}>{email}</a>
  </p>
);

export default PanelContact;
