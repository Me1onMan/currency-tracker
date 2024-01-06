import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import Global from "./styled";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Global />
    <App />
  </>,
);
