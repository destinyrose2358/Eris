import { connect } from "react-redux";
import { updateUser, requestUser } from "../../actions/user_actions";
import UpdateUserForm from "./update_user_form";

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    updateUser: userData => dispatch(updateUser(userData))
});

const UpdateUserFormContainer = connect(msp, mdp)(UpdateUserForm);

export default UpdateUserFormContainer;