import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { useAuth } from "store/auth";

const ProtectedRoute = () => {
  const { user, token, logout } = useAuth();

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (token) {
      interval = setInterval(() => {
        const decodedToken = jwtDecode<any>(token);

        if (decodedToken.exp * 1000 < Date.now()) logout();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [logout, token]);

  return user ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
