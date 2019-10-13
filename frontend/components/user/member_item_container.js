import { fetchUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import MemberItem from "./member_item";


const msp = (state, { memberId }) => ({
  member: state.entities.users[memberId]
});

const mdp = (dispatch, { memberId }) => ({
  fetchMember: () => dispatch(fetchUser(memberId))
});

const MemberItemContainer = connect(msp, mdp)(MemberItem);

export default MemberItemContainer;