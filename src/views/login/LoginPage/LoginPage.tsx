import { useNavigate } from "react-router-dom";

import { useAuthentication } from "store/authentication";
import { Content, SectionTitle } from "components/shared";
import LoginForm from "../LoginForm/LoginForm";

import "./LoginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, login } = useAuthentication();

  if (user) navigate("/");

  return (
    <Content style={{ display: "flex", minHeight: "100vh" }}>
      <section className="login-section">
        <SectionTitle>LoginPage</SectionTitle>

        <LoginForm onSubmit={() => login()} />
      </section>
    </Content>
  );
};

export default LoginPage;
