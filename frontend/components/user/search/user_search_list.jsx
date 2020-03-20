import React from "react";
import UserSearchItem from "./user_search_item";

export default class UserSearchList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.users.map(user => <UserSearchItem user={user} serverId={this.props.serverId} />)
                }
            </ul>
        )
    }
}