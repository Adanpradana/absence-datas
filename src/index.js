import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./utils/reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Store, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
