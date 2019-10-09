import * as ServerAPIUtil from "../util/server_util";

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const CREATE_SERVER = "CREATE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const REMOVE_SERVER_ERRORS = "REMOVE_SERVER_ERRORS";

export const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

export const receiveServer = ({server, users}) => ({
  type: RECEIVE_SERVER,
  server,
  users
});

export const removeServer = serverId => ({
  type: REMOVE_SERVER,
  serverId
});

export const receiveServerErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors: errors.responseJSON
});

export const removeServerErrors = () => ({
  type: REMOVE_SERVER_ERRORS
})

export const fetchServers = () => dispatch => (
  ServerAPIUtil.fetchServers()
    .then(servers => dispatch(receiveServers(servers)))
);

export const fetchServer = serverId => dispatch => (
  ServerAPIUtil.fetchServer(serverId)
    .then(server => dispatch(receiveServer(server)),
      errors => dispatch(receiveServerErrors(errors)))
);

export const createServer = server => dispatch => (
  ServerAPIUtil.createServer(server)
    .then(server => dispatch(receiveServer(server)),
      errors => dispatch(receiveServerErrors(errors)))
);

export const deleteServer = serverId => (
  ServerAPIUtil.deleteServer(serverId)
    .then(server => dispatch(removeServer(server.id)),
      errors => dispatch(receiveServerErrors(errors)))
);