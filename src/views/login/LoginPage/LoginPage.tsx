import { Content, SectionTitle } from "components/shared";
import LoginForm from "../LoginForm/LoginForm";

import "./LoginPage.scss";

const LoginPage = () => (
  <Content style={{ display: "flex", minHeight: "100vh" }}>
    <section className="login-section">
      <SectionTitle>Войти</SectionTitle>
      <LoginForm />
    </section>
  </Content>
);

export default LoginPage;
