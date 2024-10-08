import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import store from "./app/store";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
    {/* <Provider store={store}> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* </Provider> */}
  </GoogleOAuthProvider>
);
