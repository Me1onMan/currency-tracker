import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@contexts/ThemeProvider";
import router from "@router/router";

import Global from "./styled";

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Global />
    </ThemeProvider>
  );
}
