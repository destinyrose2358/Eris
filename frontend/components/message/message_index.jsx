import React from "react";
import MessageShowContainer from "./message_show_container";

export default class MessageIndex extends React.Component {
    componentDidMount() {
        this.props.fetchMessages();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
            this.props.fetchMessages();
        }
    }

    render() {
        const { messages, users } = this.props;
        const messageLis = messages.map(message => (
            message ?
                <MessageShowContainer message={message} key={message.id} author={users[message.authorId]} />
            :
                null
        ));
        return messages[0] ?
                <ul
                    className="message-index"
                >
                    { messageLis }
                </ul>
            :
                <div
                    className="message-index"
                >

                </div>
    }
}