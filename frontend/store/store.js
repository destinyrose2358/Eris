import { createStore, applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/root_reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState = {}) => {
  let middleware;
  switch (process.env.NODE_ENV) {
    case "production":
      middleware = applyMiddleware(thunk);
      break;
    case "development":
      middleware = composeWithDevTools(applyMiddleware(thunk, logger));
      break;
  }
  return createStore(rootReducer, preloadedState, middleware);
};

export default configureStore;