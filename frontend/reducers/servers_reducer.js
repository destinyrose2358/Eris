import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";
import merge from "lodash.merge";


const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SERVERS:
      newState = merge({}, state, action.servers);
      return newState;
    case RECEIVE_SERVER:
      newState = merge({}, state, {[action.server.id]: action.server});
      return newState;
    case REMOVE_SERVER:
      newState = merge({}, state);
      delete newState[action.serverId];
      return newState;
    default:
      return state;
  };
};

export default serversReducer;