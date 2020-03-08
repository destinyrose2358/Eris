import React from "react";
import BaseSVG from "../svg/base_svgs";
import EditMessageFormContainer from "./edit_message_form_container";

export default class MessageShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            change: true
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        $("body").on("click", e => {
            if (!e.target.classList.contains(`message-${this.props.message.id}`)) {
                this.setState(prevState => {
                    return {
                        menuOpen: false
                    }
                });
            }
        });
    }

    componentWillUnmount() {
        $("body").off("click");
    }

    toggleMenu(e) {
        this.setState(prevState => {
            return {
                menuOpen: !prevState.menuOpen
            }
        });
    }

    render() {
        const { message, author, isUser, select, selected } = this.props;
        const { menuOpen } = this.state;
        let dropDown;
        if (isUser) dropDown = (
            <aside
                className={`message-menu message-${ message.id }`}
            >
                <BaseSVG.dropdown
                    menuOpen={menuOpen}
                    message={message}
                    toggleMenu={this.toggleMenu}
                />
                <div
                    className={`message-menu-content message-${message.id} ${menuOpen ? "visible" : ""}`}
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