import { Content, SectionTitle } from "components/shared";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

import "./RegistrationPage.scss";

const RegistrationPage = () => {
  return (
    <Content style={{ display: "flex", minHeight: "100vh" }}>
      <section className="registration-section">
        <SectionTitle>Зарегистрироваться</SectionTitle>
        <RegistrationForm />
      </section>
    </Content>
  );
};

export default RegistrationPage;
