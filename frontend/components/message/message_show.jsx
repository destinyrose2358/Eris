import React from "react";

export default class MessageShow extends React.Component {
    render() {
        const { message, author } = this.props;
        return (
            <li
                className="message-show"
            >
                <div
                className="icon"
                    style={{backgroundImage: `url(${author.profile_picture})`}}
                >

                </div>
                <aside
                    className="message-content"
                >
                    <p>{author.username}</p>
                    <p>{message.body}</p>
                </aside>
            </li>
        );
    }
}