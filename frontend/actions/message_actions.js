import * as MessageAPIUtl from "../util/message_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const removeMessage = messageId => ({
  type: REMOVE_MESSAGE,
  messageId
});

export const fetchMessages = channelId => dispatch => (
  MessageAPIUtl.fetchMessages(channelId)
    .then(messages => dispatch(receiveMessages(messages)))
);

export const createMessage = (channelId, message) => dispatch => (
  MessageAPIUtl.createMessage(channelId, message)
    .then(message => dispatch(receiveMessage(message)))
);

export const updateMessage = message => dispatch => (
  MessageAPIUtl.updateMessage(message)
    .then(message => dispatch(receiveMessage(message)))
);

export const deleteMessage = message => dispatch => (
  MessageAPIUtl.deleteMessage(message)
    .then(messageId => dispatch(removeMessage(messageId)))
);