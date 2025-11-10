import React from "react";
import { createBrowserRouter } from "react-router";
// layout
import LayoutAuth from "@shared/components/layout/Auth/index.jsx";
import LayoutApp from "@shared/components/layout/Main/index.jsx";
import { withLazy } from "@shared/HOC/withLazy.js";

// screen
import Login from "@features/auth/page/Login";
import History from "@features/History/index.jsx";
import Setting from "@features/Setting/index.jsx";
import Transaction from "@features/Transaction/index.jsx";
import Dashboard from "@/features/Dashboard/index.jsx";
import AuthGuard from "@app/router/guard/AuthGuard";
import RoleGuard from "@app/router/guard/RoleGuard";
import GuestGuard from "@app/router/guard/GuestGuard";
import { roles } from "@shared/constants/role";


// screen import lazy
const NotFoundLazy = withLazy(() => import("@/features/NotFound/index.jsx"), {
  fallback: <div>NotFound Loading...</div>,
});

const ErrorPageLazy = withLazy(
  () => import("@/shared/components/feedback/ErrorPage/index.jsx"),
  {
    fallback: <div>Error Loading...</div>,
  },
);

// init router
const router = createBrowserRouter([
  // Authenticated zone
  {
    path: "/",
    element: <AuthGuard />,
    children: [
      {
        element: <LayoutApp />,
        children: [
          // ===============================
          // DASHBOARD (role: [1])
          // ===============================
          {
            element: (
              <RoleGuard
                allowedRoles={[
                  roles.superAdmin,
                  roles.hr,
                  roles.accountant,
                  roles.employee,
                ]}
              />
            ),
            children: [
              {
                index: true, // pathname: "/",
                element: <Dashboard />,
              },
            ],
          },

          // ===============================
          // TRANSACTION (roles: [1,2])
          // ===============================
          {
            element: <RoleGuard allowedRoles={[roles.superAdmin, roles.hr]} />,
            children: [
              {
                path: "transaction",
                element: <Transaction />,
              },
              {
                path: "history",
                element: <History />,
              },
              {
                path: "setting",
                element: <Setting />,
              },
            ],
          },
        ],
      },
    ],
  },

  // ===============================
  // PUBLIC ROUTES
  // ===============================
  {
    element: <GuestGuard />,
    children: [
      {
        path: "/login",
        element: (
          <LayoutAuth>
            <Login />
          </LayoutAuth>
        ),
      },
    ],
  },

  // error page
  {
    path: "/403",
    element: <ErrorPageLazy />,
  },
  {
    path: "*",
    element: <NotFoundLazy />,
  },
]);

export default router;
