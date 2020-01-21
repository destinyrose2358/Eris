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
        this.handleFile = this.handleFile.bind(this);
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
        this.props.updateUser({user: { username, email, password }}, this.props.currentUser.id);
    }

    handleFile(e) {
        this.setState({
            file: e.currentTarget.files[0]
        })
    }

    render() {
        let { username, password, email, newPassword, profile_picture, editting, file } = this.state;
        return this.state.editting ? (
            <form
                className="user-edit-form"
                onSubmit={this.handleSubmit}
            >
                <input
                    type="file"
                    name="profile_picture"
                    accept="image/png, image/jpeg"
                    onChange={this.handleFile}
                />
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
                <label>
                    PASSWORD
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.update("password")}
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