import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { IpAddressProvider } from "./context/IpAddressContext";
import "./index.scss";

ReactDOM.render(
  <IpAddressProvider>
    <App />
  </IpAddressProvider>,
  document.getElementById("app")
);
