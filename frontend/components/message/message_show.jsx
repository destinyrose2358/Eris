import React from "react";
import BaseSVG from "../svg/base_svgs";
import EditMessageFormContainer from "./edit_message_form_container";

export default class MessageShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editting: false,
            menuOpen: false
        }
    }

    componentDidMount() {
        $("body").on("click", e => {
            if (e.target !== $("svg")[0]) {
                this.setState({
                    menuOpen: false
                });
            }
        });
    }

    componentWillUnmount() {
        $("body").off("click");
    }

    render() {
        const { message, author, isUser } = this.props;
        const { menuOpen, editting } = this.state;
        let dropDown;
        if (isUser) dropDown = (
            <aside
                className="message-menu"
                onClick={(e) => {
                    e.stopPropagation();
                    this.setState(prevState => {
                        return {
                            menuOpen: !prevState.menuOpen
                        }
                    });
                }}
            >
                <BaseSVG.dropdown menuOpen={menuOpen} />
                <div
                    className={`message-menu-content ${menuOpen ? "visible" : ""}`}
                >
                    <button
                        onClick={() => {
                            this.setState({
                                editting: true
                            })
                        }}
                    >
                        Edit
                    </button>
                    <button>Quote</button>
                    <button
                        onClick={() => this.props.deleteMessage()}
                    >
                        Delete
                                </button>
                </div>
            </aside>
        );
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
                        {
                            editting ?
                                <EditMessageFormContainer message={message} />
                            :
                                <p>{message.body}</p>    
                        }
                    </article>
                    { dropDown }
                </li>
                
            </>
        );
    }
}