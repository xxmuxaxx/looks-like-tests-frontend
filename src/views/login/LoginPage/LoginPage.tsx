import { useState } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "store/auth";
import { useAuthenticateMutation, useGetUserMutation } from "services/authApi";
import { Content, SectionTitle } from "components/shared";
import LoginForm, { LoginFormFields } from "../LoginForm/LoginForm";

import "./LoginPage.scss";

const LoginPage = () => {
  const [login] = useAuthenticateMutation();
  const [getUser, { isSuccess }] = useGetUserMutation();
  const { user, token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async ({
    email,
    password,
    rememberMe,
  }: LoginFormFields) => {
    setIsLoading(true);
    await login({ username: email, password, rememberMe });
    await getUser();
    setIsLoading(false);
  };

  if (isSuccess && user && token) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <Content style={{ display: "flex", minHeight: "100vh" }}>
      <section className="login-section">
        <SectionTitle>Войти</SectionTitle>
        <LoginForm isLoading={isLoading} onSubmit={handleLogin} />
      </section>
    </Content>
  );
};

export default LoginPage;
