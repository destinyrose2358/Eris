import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import serverErrorsReducer from "./server_errors_reducer";
import membershipErrorsReducer from "./membership_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  server: serverErrorsReducer,
  membership: membershipErrorsReducer
});

export default errorsReducer;