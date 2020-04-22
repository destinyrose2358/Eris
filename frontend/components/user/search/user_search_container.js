import { connect } from "react-redux";
import UserSearch from "./user_search";
import { fetchUsers } from "../../../actions/user_actions";

const msp = (state, { serverId}) => {
    return {
        server: state.entities.servers[serverId]
    };
}

const mdp = (dispatch, { serverId }) => {
    return {
        fetchUsers: (username) => dispatch(fetchUsers(username))
    }
}

const UserSearchContainer = connect(msp, mdp)(UserSearch);

export default UserSearchContainer;