import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/lib/providers/theme-provider";

import HomePage from "@/pages/home";
import AccountPage from "./pages/account";
import FaqPage from "@/pages/faq";
import LoginPage from "./pages/login";
import ErrorPage from "@/pages/error-page";

import "./index.css";
import { AuthProvider } from "./hooks/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
