import { useEffect } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";

import { useAuth } from "store/auth";
import { Roles } from "services/authApi";

type ProtectedRouteProps = {
  allowedRoles: Roles[];
};

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { user, token, logout } = useAuth();
  const location = useLocation();

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

  return user?.authorities.find((authority) =>
    allowedRoles.includes(authority.name)
  ) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/not-allowed" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
