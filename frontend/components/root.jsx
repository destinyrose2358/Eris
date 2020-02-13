import React from "react";
import { Provider } from "react-redux";
import { ActionCableProvider } from "react-actioncable-provider";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { API_WS_ROOT } from "../constants/root";

const Root = ({ store }) => {
  return (
  <Provider store={ store } >
    <ActionCableProvider url={API_WS_ROOT}>
      <HashRouter>
        <App />
      </HashRouter>
    </ActionCableProvider>
  </Provider>
)};

export default Root;