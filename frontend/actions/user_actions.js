import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUser = userId => dispatch => (
  UserAPIUtil.requestUser(userId)
    .then(user => dispatch(receiveUser(user)))
);

export const fetchUsers = username => dispatch => (
  UserAPIUtil.requestUsers(username)
    .then(users => dispatch(receiveUsers(users)))
)

export const updateUser = (userData, id) => dispatch => (
  UserAPIUtil.updateUser(userData, id)
    .then(user => dispatch(receiveUser(user)))
)