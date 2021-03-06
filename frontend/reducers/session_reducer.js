import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, logoutCurrentUser } from "../actions/session_actions";

const _null = {id: null};

const sessionReducer = (state = _null, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.currentUser.id};
    case LOGOUT_CURRENT_USER:
      return _null;
    default:
      return state;
  }
};

export default sessionReducer;