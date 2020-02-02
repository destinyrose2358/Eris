import React from "react";
import BaseSVG from "../svg/base_svgs";
import EditMessageFormContainer from "./edit_message_form_container";

export default class MessageShow extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            menuOpen: false
        }
    }

    componentDidMount() {
        $("body").on("click", e => {
            if (e.target === $("body")[0]) {
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
        const { message, author, isUser, select, selected } = this.props;
        const { menuOpen } = this.state;
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
                        onClick={(e) => {
                            e.stopPropagation();
                            this.setState({
                                menuOpen: false
                            });
                            select(message.id);
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
                            selected ?
                                <EditMessageFormContainer
                                    message={message}
                                    postAction={() => select(null)}
                                />
                            :
                                <aside
                                    className="message-content-main"
                                >
                                    <p>{message.body}</p>
                                    { dropDown }
                                </aside>    
                        }  
                    </article>
                </li>
                
            </>
        );
    }
}