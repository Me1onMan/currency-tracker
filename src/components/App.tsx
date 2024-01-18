import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "../contexts/ThemeContext";
import BankMapPage from "../pages/BankMapPage";
import ContactsPage from "../pages/ContactsPage";
import HomePage from "../pages/HomePage";
import TimeLinePage from "../pages/TimeLinePage";
import Global from "./styled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/timeline",
    element: <TimeLinePage />,
  },
  {
    path: "/banks",
    element: <BankMapPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Global />
    </ThemeProvider>
  );
}
