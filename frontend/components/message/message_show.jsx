import React from "react";
import BaseSVG from "../svg/base_svgs";

export default class MessageShow extends React.Component {
    render() {
        const { message, author } = this.props;
        return (
            <>
                <li
                    className="message-show"
                >
                    <div
                    className="icon"
                        style={{backgroundImage: `url(${author.profile_picture})`}}
                    >

                    </div>
                    <article
                        className="message-content"
                    >
                        <p>{author.username}</p>
                        <p>{message.body}</p>
                    </article>
                    <aside
                        className="message-menu"
                    >
                        { BaseSVG.dropdown }
                        <div
                            className="message-menu-content"
                        >
                            <button>Edit</button>
                            <button>Quote</button>
                            <button
                                onClick={() => this.props.deleteMessage()}
                            >
                                Delete
                            </button>
                        </div>
                    </aside>
                </li>
                
            </>
        );
    }
}