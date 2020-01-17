import React from "react";

export default class UpdateUserForm extends React.Component {
    constructor(props) {
        super(props);
        const { currentUser } = props;
        this.state = {
            username: currentUser.username,
            password: "",
            email: currentUser.email,
            profile_picture: currentUser.profile_picture,
            file: "",
            newPassword: "",
            editting: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let { username, password, email } = this.state;
        this.props.updateUser({ username, email, password }, this.props.currentUser.id);
    }

    render() {
        let { username, password, email, newPassword, profile_picture, editting, file } = this.state;
        return this.state.editting ? (
            <form
                className="user-edit-form"
                onSubmit={this.handleSubmit}
            >
                <input type="file" name="profile_picture" accept="image/png, image/jpeg" value={file} />
                <img src={profile_picture} alt={`${username}'s profile picture`} />
                <label>
                    USERNAME
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange = {this.update("username")}
                    />
                </label>
                <input type="submit" value="Save" />
            </form>
        ) : (
            <>
                <button
                    onClick={() => this.setState({editting: true})}
                >Edit</button>
            </>
        )
    }


}