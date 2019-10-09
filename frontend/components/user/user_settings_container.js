import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import UserSettings from "./user_settings";

const mdp = dispatch => ({
  logout: () => dispatch(logout())
})

const UserSettingsContainer = connect(null, mdp)(UserSettings);

export default UserSettingsContainer;