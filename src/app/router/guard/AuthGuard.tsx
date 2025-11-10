import React from "react";
import { useAuthStore } from "@shared/store/useAuthStore";
import { Navigate, Outlet, useLocation } from "react-router";

const AuthGuard: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  // Nếu chưa login → redirect về /login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
