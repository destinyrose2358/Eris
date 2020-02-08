import { RECEIVE_SERVER_ERRORS, REMOVE_SERVER_ERRORS } from "../actions/server_actions";
import merge from "lodash.merge";


const serverErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
      newState = merge([], state, action.errors);
      return newState;
    case REMOVE_SERVER_ERRORS:
      return [];
    default:
      return state;
  }
};

export default serverErrorsReducer;