import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { acceptInvite } from "../../actions/membership_actions"
import AcceptInvite from "./accept_invite";

const mdp = (dispatch, { match: { params: { id } } }) => ({
    acceptInvite: () => dispatch(acceptInvite(id))
});

const AcceptInviteContainer = withRouter(connect(null, mdp)(AcceptInvite));

export default AcceptInviteContainer;