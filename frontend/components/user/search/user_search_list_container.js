import { connect } from "react-redux";
import UserSearchList from "./user_search_list";
import merge from "lodash.merge";

const msp = (state, { serverId }) => {
    
    const memberIds = [...state.entities.servers[serverId].member_ids, ...state.entities.servers[serverId].pending_member_ids];
    const allUsers = Object.values(merge({}, state.entities.users));
    debugger;
    const users = allUsers.filter(user => !memberIds.includes(user.id) && user.username);
    
    return {
        users
    }
}

const UserSearchListContainer = connect(msp)(UserSearchList);

export default UserSearchListContainer;