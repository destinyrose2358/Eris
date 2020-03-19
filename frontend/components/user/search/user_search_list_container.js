import { connect } from "react-redux";
import UserSearchList from "./user_search_list";

const msp = (state, { serverId }) => {
    const memberIds = merge([], state.entities.servers[serverId].member_ids, state.entities.servers[serverId].pending_member_ids);
    const users = merge({}, state.entities.users).filter(user => !memberIds.includes(user.id) && user.username)
    return {
        users
    }
}

const UserSearchListContainer = connect(msp)(UserSearchList);

export default UserSearchListContainer;