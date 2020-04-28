import merge from "lodash.merge";
import { RECEIVE_CHANNEL, RECEIVE_DIRECT_CHANNELS, RECEIVE_DIRECT_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";


const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHANNEL:
      newState = merge({}, state, { [action.channel.id]: action.channel });
      return newState;
    case RECEIVE_DIRECT_CHANNELS:
      newState = merge({}, state, action.channels);
      return newState;
    case RECEIVE_SERVER:
      newState = merge({}, state, action.channels);
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_MESSAGE:
      newState = merge({}, state);
      let message_ids = newState[action.message.channelId].message_ids;
      newState[action.message.channelId].message_ids = message_ids.includes(action.channel) ?
        message_ids : message_ids.concat(action.channel);
      return newState;
    case REMOVE_MESSAGE:
      newState = merge({}, state);
      newState[action.message.channelId].message_ids = newState[action.message.channelId].message_ids.filter(term => term !== action.message.id);
      return newState;
    case RECEIVE_DIRECT_CHANNEL:
      newState = merge({}, state, { [action.channel.id]: action.channel });
      return newState;
    case "RECEIVE_CHANNEL_MEMBERSHIP":
      newState = merge({}, state);
      newState[action.memberable_id].member_ids = [...newState[action.memberable_id].member_ids, action.user_id].filter(distinct);
      return newState;
    default:
      return state;
  }
};

export default channelsReducer;