import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@shared/store/useAuthStore";
import { firstRoute } from "@app/router/firstRoute";

const GuestGuard = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  if (isAuthenticated) {
    // if user have been login, navigate user to main page
    return <Navigate to={firstRoute[user.role] ?? "/"} replace />;
  }

  return <Outlet />;
};

export default GuestGuard;
