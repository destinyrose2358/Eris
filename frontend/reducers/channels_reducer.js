import merge from "lodash.merge";
import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";


const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHANNEL:
      newState = merge({}, state, { [action.channel.id]: action.channel });
      return newState;
    case RECEIVE_SERVER:
      newState = merge({}, state, action.channels);
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default channelsReducer;