import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER, RECEIVE_PENDING_MEMBER } from "../actions/server_actions";
import merge from "lodash.merge";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";


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
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_PENDING_MEMBER:
      newState = merge({}, state);
      newState[action.serverId].pending_member_ids = Object.values(new Set([...newState[action.serverId].pending_member_ids, action.memberId]));
      return newState;
    case "RECEIVE_SERVER_MEMBERSHIP":
      newState = merge({}, state);
      newState[action.memberable_id].member_ids = [...newState[action.memberable_id].member_ids, action.user_id].filter(distinct);
      return newState;
    default:
      return state;
  };
};

export default serversReducer;