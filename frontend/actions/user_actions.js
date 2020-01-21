import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = userId => dispatch => (
  UserAPIUtil.requestUser(userId)
    .then(user => dispatch(receiveUser(user)))
);

export const updateUser = (userData, id) => dispatch => (
  UserAPIUtil.updateUser(userData, id)
    .then(user => dispatch(receiveUser(user)))
)