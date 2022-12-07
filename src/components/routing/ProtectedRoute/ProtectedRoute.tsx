import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";

import { useAuth } from "store/auth";

const ProtectedRoute = () => {
  const { user, token, logout } = useAuth();

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (token) {
      interval = setInterval(() => {
        const decodedToken = jwtDecode<any>(token);
        const tokenDate = decodedToken.exp * 1000;
        const remaining = tokenDate - Date.now();

        if (new Date(remaining).getSeconds() === 10) {
          toast.error("Ваша сессия будет прекращена через 10 секунд");
        }

        if (remaining <= 0) logout();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [logout, token]);

  return user ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
