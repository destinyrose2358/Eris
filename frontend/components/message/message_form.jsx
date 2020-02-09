import React from "react";

export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        let { message } = props;
        this.state = {
            body: message.body
        }
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    handleSubmit() {
        this.props.action(this.state)
            .then(() => {
                this.setState({
                    body: ""
                }, this.props.postAction);
            });
    }

    render() {
        const { formType, channel, postAction, members } = this.props;
        const { body } = this.state;
        let displayTitle;

        if (channel && channel.title) {
            if (channel.serverId) {
                displayTitle = `#${channel.title}`;
            } else {
                displayTitle = `${channel.title}`;
            }
        } else if (members) {
            displayTitle = `@${members[members.length - 1].username}`
        }
        let channelTitleContent;
        if (displayTitle) switch (displayTitle[0]) {
            case "#":
                channelTitleContent = (
                    <>
                        <i class="fas fa-hashtag"></i>
                        <h1>{displayTitle.slice(1)}</h1>
                    </>
                );
                break;
            case "@":
                channelTitleContent = (
                    <>
                        <i class="fas fa-at"></i>
                        <h1>{displayTitle.slice(1)}</h1>
                    </>
                );
                break;
            default:
                channelTitleContent = (
                    <h1>{displayTitle}</h1>
                );
        }
        const controls = formType === "edit" ?
            <p
                className="message-form-controls"
            >
                escape to
                    <a
                        onClick={e => {
                            e.preventDefault();
                            postAction();
                        }}
                    >
                        close
                    </a>
                •
                enter to
                    <a
                        onClick={e => {
                            e.preventDefault();
                            this.handleSubmit();
                        }}
                    >
                        save
                    </a>
            </p>
        :
            null;
        return (
            <>
                <form
                    className="message-form"
                    onKeyDown={(e) => {
                        switch (e.key) {
                            case "Enter":
                                e.preventDefault();
                                this.handleSubmit();
                                break;
                            case "Escape":
                                postAction();
                        }
                    }}
                >
                    <input
                        placeholder={
                            formType === "create" ?
                                `Message ${displayTitle}`
                            :
                                ""
                        }
                        type="text"
                        value={body}
                        onChange={this.update("body")}
                        autoFocus={formType === "edit"}
                    />
                    {controls}        
                </form>
                {
                    formType === "create" ?
                        <div
                            className="channel-title"
                        >
                            {channelTitleContent}
                        </div>
                    :
                        null
                }
            </>
        )
    }
}