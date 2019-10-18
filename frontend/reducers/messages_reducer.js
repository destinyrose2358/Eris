import merge from "lodash.merge";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from "../actions/message_actions";


const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_MESSAGES:
      newState = merge({}, state, action.messages);
      return newState;
    case RECEIVE_MESSAGE:
      newState = merge({}, state, { [action.message.id]: action.message });
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
