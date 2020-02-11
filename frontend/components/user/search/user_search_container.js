import { connect } from "react-redux";
import UserSearch from "./user_search";

const mdp = (dispatch, { serverId }) => {
    return {
        fetchUsers: (username) => dispatch(fetchUsers(username))
    }
}

const UserSearchContainer = connect(null, mdp)(UserSearch);

export default UserSearchContainer;