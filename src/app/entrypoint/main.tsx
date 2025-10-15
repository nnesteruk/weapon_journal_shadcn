import { RoutesProvider } from "../routes";
import "@/app/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutesProvider />
  </StrictMode>,
);
