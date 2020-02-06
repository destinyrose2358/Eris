import merge from "lodash.merge";
import { RECEIVE_DIRECT_CHANNELS } from "../actions/channel_actions";

const channelIdsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_DIRECT_CHANNELS:
      newState = merge([], state, action.channelIds);
      return newState;
    default:
      return state;
  }
}

export default channelIdsReducer;