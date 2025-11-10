import React from "react";
import { useAuthStore } from "@shared/store/useAuthStore";
import { Navigate, Outlet } from "react-router";

interface RoleGuardProps {
  allowedRoles: number[];
}

const RoleGuard: React.FC<RoleGuardProps> = ({ allowedRoles }) => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
};

export default RoleGuard;
