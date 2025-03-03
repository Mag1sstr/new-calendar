import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SaveContextProvider from "./contexts/SaveContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SaveContextProvider>
      <App />
    </SaveContextProvider>
  </StrictMode>
);
