import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import serverIdsReducer from "./server_ids_reducer";
import channelIdsReducer from "./channel_ids_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  serverIds: serverIdsReducer,
  channelIds: channelIdsReducer
});

export default rootReducer;