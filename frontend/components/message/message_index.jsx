import React from "react";
import MessageShowContainer from "./message_show_container";
import CreateMessageFormContainer from "./create_message_form_container";

export default class MessageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edittingMessage: null
        };
    }

    componentDidMount() {
        this.props.fetchMessages();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.channelId !== this.props.match.params.channelId ) {
            this.props.fetchMessages();
            this.update("edittingMessage")(null);
        }
    }

    update(field) {
        return value => {
            this.setState({
                [field]: value
            })
        }
    }

    render() {
        const { messages, users, channel } = this.props;
        const { edittingMessage } = this.state;
        const messageLis = messages.map(message => (
            message ?
                <MessageShowContainer
                    message={message}
                    key={message.id}
                    author={users[message.authorId]}
                    select={(value) => this.update("edittingMessage")(value)}
                    selected={edittingMessage === message.id ? "selected" : ""}
                />
            :
                null
        ));
        return (
            <>
                {
                    messages[0] ?
                        <ul
                            className="message-index scroll-visible"
                        >
                            { messageLis }
                        </ul>
                    :
                        <div
                            className="message-index"
                        >

                        </div>
                }
                <CreateMessageFormContainer message={{body: ""}} channel={channel} />
            </>
        )
    }
}