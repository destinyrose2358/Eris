import merge from "lodash.merge";
import { RECEIVE_SERVER } from "../actions/server_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const rolesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SERVER:
      newState = merge({}, state, action.roles);
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default rolesReducer;