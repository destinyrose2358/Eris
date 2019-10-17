import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import serversReducer from "./servers_reducer";
import channelsReducer from "./channels_reducer";
import rolesReducer from "./roles_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  roles: rolesReducer
});

export default entitiesReducer;