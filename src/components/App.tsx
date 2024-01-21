// @ts-expect-error @ as src
import { ThemeProvider } from "@contexts/ThemeProvider";
// @ts-expect-error @ as src
import BankMapPage from "@pages/BankMapPage";
// @ts-expect-error @ as src
import ContactsPage from "@pages/ContactsPage";
// @ts-expect-error @ as src
import HomePage from "@pages/HomePage";
// @ts-expect-error @ as src
import TimeLinePage from "@pages/TimeLinePage";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
