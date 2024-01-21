import React from "react";
import { createRoot } from "react-dom/client";

// @ts-expect-error @ as src
import App from "@components/App";
// @ts-expect-error @ as src
import ErrorBoundary from "@components/ErrorBoundary";

const root = createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
