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
        this.props.action(this.state);
    }

    render() {
        const { formType, channel } = this.props;
        const { body } = this.state;
        return (
            <form
                className="message-form"
                onKeyPress={(e) => {
                    console.log(e.charCode);
                    switch (e.key) {
                        case "Enter":
                            e.preventDefault();
                            this.handleSubmit();
                            break;
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
                />
            </form>
        )
    }
}