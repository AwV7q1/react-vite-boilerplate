import React from "react";
import {createBrowserRouter} from "react-router";
import {PrivateRouter} from "@/app/router/privateRouter.jsx";
import {withLazy} from "@shared/HOC/withLazy.js";

// layout
import LayoutAuth from "@shared/components/layout/Auth/index.jsx";
import LayoutApp from "@shared/components/layout/Main/index.jsx";

// screen
import Login from "@features/auth/page/Login/index.jsx"
import Dashboard from "@/features/Dashboard/index.jsx";
import Transaction from "@features/Transaction/index.jsx";
import History from "@features/History/index.jsx";
import Setting from "@features/Setting/index.jsx";


// screen import lazy
const NotFoundLazy = withLazy(() => import("@/features/NotFound/index.jsx"), {
  fallback: <div>NotFound Loading...</div>,
})

const ErrorPageLazy = withLazy(() => import("@/shared/components/feedback/ErrorPage/index.jsx"), {
  fallback: <div>Error Loading...</div>,
})

// init router
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <LayoutAuth>
        <Login/>
      </LayoutAuth>
    ),
    errorElement: <ErrorPageLazy/>,
  },
  {
    path: "/", // outlet, wrapper  layout
    element: (
      <PrivateRouter>
        <LayoutApp/>
      </PrivateRouter>
    ),
    errorElement: <ErrorPageLazy/>,
    children: [
      {
        index: true,
        element: <Dashboard/>,
      },
      {
        path: "transaction",
        element: <Transaction/>,
      },
      {
        path: "history",
        element: <History/>,
      },
      {
        path: "setting",
        element: <Setting/>,
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundLazy/>,
  }

]);

export default router;

