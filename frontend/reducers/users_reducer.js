import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
import merge from "lodash.merge";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({},
        state,
        {[action.currentUser.id]: action.currentUser});
      return newState;
    case RECEIVE_SERVER:
      newState = merge({}, state, action.users);
      return newState;
    default:
      return state;
  };
};

export default usersReducer;