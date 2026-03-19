import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/portfolio.css";
import App from "./App.jsx";
import CustomCursor from "./CustomCursor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomCursor />
    <App />
  </StrictMode>
);
