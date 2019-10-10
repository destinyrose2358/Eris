import merge from "lodash.merge";
import { RECEIVE_SERVERS, RECEIVE_SERVER } from "../actions/server_actions";

const serverIdsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SERVERS:
      newState = merge([], state, action.serverIds);
      return newState;
    case RECEIVE_SERVER:
      newState = merge([], state, action.server.id);
      return newState;
    default:
      return state;
  }
};

export default serverIdsReducer;