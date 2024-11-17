import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider, type TAuthConfig } from "react-oauth2-code-pkce";

const authConfig: TAuthConfig = {
  clientId: "bb650db303e04a57a0788cf0231f2b08",
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
  redirectUri: "http://localhost:3000/",
  scope: "user-read-private user-read-email",
};

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <AuthProvider authConfig={authConfig}>
        <App />
      </AuthProvider>
    </React.StrictMode>,
  );
} else {
  console.error("Root container not found");
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
