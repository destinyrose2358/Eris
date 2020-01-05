import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = state => ({
  errors: state.errors.session,
  formType: "Welcome Back!"
});

const mdp = dispatch => ({
  processForm: user => dispatch(login(user))
});

const LoginFormContainer = connect(msp, mdp)(SessionForm);

export default LoginFormContainer;