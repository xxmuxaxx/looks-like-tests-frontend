import { Outlet, Navigate, useLocation } from "react-router-dom";

import { useAuth } from "store/auth";
import { Roles } from "services/authApi";

type ProtectedRouteProps = {
  allowedRoles?: Roles[];
};

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { user } = useAuth();
  const location = useLocation();

  return allowedRoles ? (
    user?.authorities.find((authority) => allowedRoles.includes(authority)) ? (
      <Outlet />
    ) : user ? (
      <Navigate to="/not-allowed" state={{ from: location }} replace />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    )
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
