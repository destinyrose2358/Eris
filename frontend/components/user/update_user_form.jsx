import React from "react";
import BaseSVG from "../svg/base_svgs";

export default class UpdateUserForm extends React.Component {
    constructor(props) {
        super(props);
        const { currentUser } = props;
        this.state = {
            username: currentUser.username,
            password: "",
            email: currentUser.email,
            profile_picture: currentUser.profile_picture,
            photoURL: null,
            file: null,
            newPassword: "",
            editting: false,
            edittingPassword: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    clearProfilePicture() {
        // const file;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                file,
                photoURL: fileReader.result
            })
        }
        fileReader.readAsDataURL(file);
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
        let { username, password, email, file, newPassword } = this.state;
        if (username) formData.append("user[username]", username);
        if (password) formData.append("password", password);
        if (email) formData.append("user[email]", email);
        if (file) formData.append("user[photo]", file);
        if (newPassword.length > 0) formData.append("user[password]", newPassword);
        this.props.updateUser(formData, this.props.currentUser.id);
        this.reset();
    }

    componentDidUpdate(prevProps) {
        if (Object.entries(this.props).some(currentEntry => currentEntry[1] !== prevProps[currentEntry[0]])) {
            const { currentUser } = this.props;
            this.setState({
                username: currentUser.username,
                email: currentUser.email,
                profile_picture: currentUser.profile_picture
            })
        } 
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                file,
                photoURL: fileReader.result
            })
        }
        fileReader.readAsDataURL(file);
    }

    reset() {
        const { currentUser } = this.props;
        this.setState({
            username: currentUser.username,
            password: "",
            email: currentUser.email,
            profile_picture: currentUser.profile_picture,
            photoURL: null,
            file: null,
            newPassword: "",
            editting: false,
            edittingPassword: false
        });
    }

    render() {
        let { username, password, email, newPassword, photoURL, profile_picture, editting, edittingPassword } = this.state;
        return editting ? (
            <form
                className="update-user"
                onSubmit={this.handleSubmit}
            >
                <div
                    className="update-user-row"
                >
                    <div
                        className="image-uploader"
                        style={{
                            backgroundImage: `url(${photoURL || profile_picture})`
                        }}
                    >
                        <div
                            className="image-uploader-message"
                        >
                            Change
                            <br/>
                            Avatar
                        </div>
                        <input
                            type="file"
                            name="profile_picture"
                            accept="image/png, image/jpeg"
                            onChange={this.handleFile}
                        />
                        <div
                            className="image-uploader-icon"
                        >
                            {BaseSVG.file}
                        </div>
                    </div>
                    
                    <div
                        className="update-user-fields"
                    >
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
                            EMAIL
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.update("email")}
                            />
                        </label>
                        <label>
                            CURRENT PASSWORD
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.update("password")}
                            />
                        </label>
                        { edittingPassword ?
                            <label>
                                NEW PASSWORD
                                <input
                                    type="password"
                                    name="new-password"
                                    value={newPassword}
                                    onChange={this.update("newPassword")}
                                />
                            </label>
                            :
                            <a
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({
                                        edittingPassword: true
                                    })
                                }}
                            >
                                Change Password?
                            </a>
                        }
                    </div>
                </div>
                <div
                    className="update-user-buttons"
                >
                    <a
                        onClick={e => {
                            e.preventDefault();
                            this.reset();
                        }}
                    >
                        Cancel
                    </a>
                    <input type="submit" value="Save" />
                </div>
            </form>
        ) : (
            <div
                className="update-user"
            >
                <div
                    className="image-uploader"
                    style={{
                        backgroundImage: `url(${photoURL || profile_picture})`
                    }}
                >
                </div>
                <div
                    className="update-user-fields"
                >
                    <label>
                        USERNAME
                        <p>{username}</p>
                    </label>
                    <label>
                        EMAIL
                        <p>{email}</p>
                    </label>
                </div>
                <button
                    onClick={() => this.setState({editting: true})}
                >Edit</button>
            </div>
        )
    }


}