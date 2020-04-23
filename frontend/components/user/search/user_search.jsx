import React from "react";
import UserSearchListContainer from "./user_search_list_container";
import SVG from "../../svg/base_svgs";

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
        });
    }

    componentDidUpdate(_, prevState) {
        if ((!prevState.username && this.state.username) || (prevState.username.length >= this.state.username.length)) {
            this.props.fetchUsers(this.state.username);
        }
    }

    render() {
        const {serverId, server, toggleUserSearch} = this.props;
        const {username} = this.state;
        return (
            <div
                className="user-search"
            >
                <aside>
                    <h1>{`INVITE FRIENDS TO ${server.title.toUpperCase()}`}</h1>
                    <div
                        onClick={() => toggleUserSearch()}
                    >
                        {SVG.close}
                    </div>
                    
                </aside>
                <input
                    type="text"
                    value={username}
                    onChange={this.update("username")}
                    placeholder="Search for Friends"
                />
                <UserSearchListContainer username={username} serverId={serverId} />
            </div>
        )
    }
}