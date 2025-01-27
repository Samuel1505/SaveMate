import "./tailwind.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Splashscreen } from "./screens/Splashscreen";
import { Onboarding } from "./screens/Onboarding/Onboarding.jsx";
import { SignUp } from "./screens/SignUp/SignUp.jsx";
import { Login } from "./screens/Login/index.js";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Splashscreen />
    <Onboarding />
    <SignUp />
    <Login />
  </StrictMode>,
);
