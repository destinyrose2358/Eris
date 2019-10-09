import { connect } from "react-redux";
import UserControls from "./user_controls";

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
})

const UserControlsContainer = connect(msp)(UserControls);

export default UserControlsContainer;