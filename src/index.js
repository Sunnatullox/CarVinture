import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";
import 'aos/dist/aos.css'



ReactDOM.render(
  <Auth0Provider
    domain="dev-1io1ac3n.us.auth0.com"
    clientId="1vQZgBZbFhILqnvwP7daKKiSGndTEaQf"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
