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
        const { formType, channel, postAction } = this.props;
        const { body } = this.state;
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
                            `Message #${channel.title}`
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
        )
    }
}