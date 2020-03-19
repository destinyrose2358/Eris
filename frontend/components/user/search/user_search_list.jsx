import React from "react";

export default class UserSearchList {
    render() {
        return (
            <ul>
                {
                    this.props.users.map(user => <UserSearchItem user={user} />)
                }
            </ul>
        )
    }
}