import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchServer, fetchServers, createServer, deleteServer } from "./actions/server_actions";

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  };
  window.fetchServers = fetchServers;
  window.fetchServer = fetchServer;
  window.createServer = createServer;
  window.deleteServer = deleteServer;
  window.store = store;
  ReactDOM.render(<Root store={ store } />, root);
});