import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store/index";

import "normalize.css";

import App from "./App.js";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
