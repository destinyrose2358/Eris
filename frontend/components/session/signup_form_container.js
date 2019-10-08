import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = state => ({
  errors: state.errors.session,
  formType: "Sign Up"
});

const mdp = dispatch => ({
  processForm: user => dispatch(signup(user))
});

const SignupFormContainer = connect(msp, mdp)(SessionForm);

export default SignupFormContainer;