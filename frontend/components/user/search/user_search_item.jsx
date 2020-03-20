import { inviteUser } from "../../../actions/membership_actions";
import React from "react";

const UserSearchItem = (props) => {
    return (
        <li>
            <p>{props.user.username}</p>
            <button
                onClick={() => {
                    inviteUser(props.serverId, props.user.id);
                }}
            >
                Invite
            </button>
        </li>
    )
};

export default UserSearchItem;