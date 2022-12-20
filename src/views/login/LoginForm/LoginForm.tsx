import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuthenticateMutation } from "services/authApi";
import { Form } from "components/forms";
import { useAuth } from "store/auth";
import { loginLayout, loginSchema } from "./LoginForm.data";

import "./LoginForm.scss";

export type LoginFormFields = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const initialValues: LoginFormFields = {
  email: "",
  password: "",
  rememberMe: false,
};

const LoginForm = () => {
  const location = useLocation();
  const [login, { isSuccess }] = useAuthenticateMutation();
  const { user, token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async ({
    email,
    password,
    rememberMe,
  }: LoginFormFields) => {
    setIsLoading(true);
    await login({ username: email, password, rememberMe });
    setIsLoading(false);
  };

  if (isSuccess && user && token) {
    return <Navigate to={from} replace />;
  }

  return (
    <Form
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleLogin}
      layout={loginLayout}
      isLoading={isLoading}
    />
  );
};

export default LoginForm;
