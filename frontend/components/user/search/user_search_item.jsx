import { inviteUser } from "../../../actions/membership_actions";
import React from "react";
import { withRouter } from "react-router-dom";

const UserSearchItem = (props) => {
    return (
        <li
            className="user-search-item"
        >
            <p>{props.user.username}</p>
            <button
                onClick={() => {
                    inviteUser(props.serverId, props.user.id)
                        .then(({channelId}) => props.history.push(`/channels/${channelId}`));
                }}
            >
                Invite
            </button>
        </li>
    )
};

export default withRouter(UserSearchItem);