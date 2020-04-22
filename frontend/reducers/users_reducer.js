import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
import merge from "lodash.merge";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_DIRECT_CHANNELS, RECEIVE_DIRECT_CHANNEL } from "../actions/channel_actions";

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
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_USER:
      newState = merge(
        {},
        state,
        { [action.user.id]: action.user}
      );
      return newState;
    case RECEIVE_DIRECT_CHANNELS:
      newState = merge({}, state, action.users);
      return newState;
    case RECEIVE_DIRECT_CHANNEL:
      newState = merge({}, state, action.users);
      return newState;
    case "REMOVE_USER":
      newState = merge({}, state);
      delete newState[action.user_id];
      return newState;
    case "RECEIVE_CHANNEL_MEMBERSHIP":
      newState = merge({},
        state, {
          [action.user.id]: action.user
        }
      );
      return newState;
    case "RECEIVE_SERVER_MEMBERSHIP":
      newState = merge({},
        state, {
          [action.user.id]: action.user
        }
      );
      return newState;
    case "RECEIVE_USERS":
      newState = merge({}, state, action.users);
      return newState;
    default:
      return state;
  };
};

export default usersReducer;