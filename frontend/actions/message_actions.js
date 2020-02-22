import * as MessageAPIUtl from "../util/message_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const receiveMessage = ({message, channel}) => ({
  type: RECEIVE_MESSAGE,
  message,
  channel
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const removeMessage = ({message}) => ({
  type: REMOVE_MESSAGE,
  message
});

export const fetchMessages = channelId => dispatch => (
  MessageAPIUtl.fetchMessages(channelId)
);

export const createMessage = (channelId, message) => dispatch => (
  MessageAPIUtl.createMessage(channelId, message)
);

export const updateMessage = message => dispatch => (
  MessageAPIUtl.updateMessage(message)
);

export const deleteMessage = message => dispatch => (
  MessageAPIUtl.deleteMessage(message)
);