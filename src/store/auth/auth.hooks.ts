import { useEffect } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";

import { getFullName } from "utils/helpers";
import { useAppDispatch, useAppSelector } from "../index";
import { authActions } from "./auth.slice";
import { Roles } from "services/authApi";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.authentication.user);
  const token = useAppSelector((state) => state.authentication.token);

  const actions = bindActionCreators({ ...authActions }, dispatch);

  return { user, token, ...actions };
};

const useProtectedAuth = () => {
  const { user, token, ...auth } = useAuth();

  if (!user || !token) {
    throw new Error("Not authenticated");
  }

  const fullName = getFullName(user.firstName, user.lastName, user.middleName);

  const userHasRole = (role: Roles): boolean =>
    user.authorities.some((authority) => role === authority);

  return { user, token, fullName, userHasRole, ...auth };
};

const useAuthTokenVerify = () => {
  const { token, logout } = useAuth();

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (token) {
      interval = setInterval(() => {
        const decodedToken = jwtDecode<any>(token);
        const tokenDate = decodedToken.exp * 1000;
        const remaining = tokenDate - Date.now();

        if (Math.round(remaining / 1000) === 10) {
          toast.error("Ваша сессия будет прекращена через 10 секунд");
        }

        if (remaining <= 0) logout();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [logout, token]);
};

export { useAuth, useProtectedAuth, useAuthTokenVerify };
