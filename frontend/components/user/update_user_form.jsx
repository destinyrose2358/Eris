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
            file: null,
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
        const formData = new FormData();
        let { username, password, email, file } = this.state;
        formData.append("user[username]", username);
        formData.append("user[password]", password);
        formData.append("user[email]", email);
        formData.append("user[photo]", file);
        this.props.updateUser(formData, this.props.currentUser.id);
    }

    handleFile(e) {
        this.setState({
            file: e.currentTarget.files[0]
        })
    }

    render() {
        console.log(this.state);
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
                <button onClick={e => {
                    e.preventDefault();
                    this.setState({
                        editting: false
                    });
                }}>
                    Cancel
                </button>
            </form>
        ) : (
            <div
                className="update-user"
            >
                <img src={profile_picture} alt={`${username}'s profile picture`} />
                <label>
                    USERNAME
                    <p>{username}</p>
                </label>
                <label>
                    EMAIL
                    <p>{email}</p>
                </label>
                <button
                    onClick={() => this.setState({editting: true})}
                >Edit</button>
            </div>
        )
    }


}