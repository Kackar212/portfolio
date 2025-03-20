import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import App from "./App.tsx";
import "./index.css";
import i18n from "./i18n.ts";

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY,
});

document.documentElement.lang = i18n.language;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
