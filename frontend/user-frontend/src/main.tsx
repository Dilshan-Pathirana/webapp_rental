// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";             // no need for .tsx here
import "./index.css";                // Tailwind CSS imported here

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
