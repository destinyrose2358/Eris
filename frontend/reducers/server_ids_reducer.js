import merge from "lodash.merge";
import { RECEIVE_SERVERS, RECEIVE_SERVER } from "../actions/server_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const serverIdsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SERVERS:
      newState = merge([], state);
      action.serverIds.forEach(serverId => {
        if (!newState.includes(serverId)) {
          newState.push(serverId);
        }
      });
      return newState.sort();
    case RECEIVE_SERVER:
      newState = merge([], state);
      if (!newState.includes(action.server.id)) {
        newState.push(action.server.id);
      }
      return newState.sort();
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default serverIdsReducer;