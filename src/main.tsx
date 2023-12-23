import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/lib/providers/theme-provider";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import HomePage from "@/pages/home";
import { ErrorPage } from "@/error-page";
import FaqPage from "@/pages/faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
