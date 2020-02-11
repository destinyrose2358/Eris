import React from "react";

export default class UserSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarger.value
        })
    }

    componentDidUpdate(_, prevState) {
        if ((!prevState.username && this.state.username) || (prevState.username.length >= this.state.username.length)) {
            this.props.fetchUsers(this.state.username);
        }
    }

    render() {
        const {} = this.props;
        const {username} = this.state;
        return (
            <div
                className="user-search"
            >
                <input
                    type="text"
                    value={username}
                    onChange={this.update("username")}
                />
                <UserSearchListContainer username={username} />
            </div>
        )
    }
}