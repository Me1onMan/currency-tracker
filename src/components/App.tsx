import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BANKS_ROUTE,
  CHART_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
} from "@constants/routes";
import { ThemeProvider } from "@contexts/ThemeProvider";
import BankMapPage from "@pages/BankMapPage";
import ContactsPage from "@pages/ContactsPage";
import HomePage from "@pages/HomePage";
import TimeLinePage from "@pages/TimeLinePage";

import Global from "./styled";

const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: CHART_ROUTE,
    element: <TimeLinePage />,
  },
  {
    path: BANKS_ROUTE,
    element: <BankMapPage />,
  },
  {
    path: CONTACTS_ROUTE,
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
