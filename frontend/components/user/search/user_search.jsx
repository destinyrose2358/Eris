import React from "react";
import UserSearchListContainer from "./user_search_list_container";

export default class UserSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    componentDidUpdate(_, prevState) {
        if ((!prevState.username && this.state.username) || (prevState.username.length >= this.state.username.length)) {
            this.props.fetchUsers(this.state.username);
        }
    }

    render() {
        const {serverId} = this.props;
        const {username} = this.state;
        return (
            <div
                className="modal-user-search"
            >
                <input
                    type="text"
                    value={username}
                    onChange={this.update("username")}
                />
                <UserSearchListContainer username={username} serverId={serverId} />
            </div>
        )
    }
}