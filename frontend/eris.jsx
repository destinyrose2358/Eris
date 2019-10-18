import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchMessages, createMessage, updateMessage, deleteMessage } from "./actions/message_actions";

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  };
  window.fetchMessages = fetchMessages;
  window.createMessage = createMessage;
  window.updateMessage = updateMessage;
  window.deleteMessage = deleteMessage;
  window.store = store;
  ReactDOM.render(<Root store={ store } />, root);
});