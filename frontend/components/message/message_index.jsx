import React from "react";

export default class MessageIndex extends React.Component {
    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        return (
            <div
                className="message-index"
            >
                test
            </div>
        )
    }
}