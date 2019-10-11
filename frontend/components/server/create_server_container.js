import { connect } from "react-redux";
import { createServer } from "../../actions/server_actions";
import { withRouter } from "react-router-dom";
import CreateServerForm from "./create_server_form";

const mdp = (dispatch) => ({
  createServer: server => dispatch(createServer(server))
});

const CreateServerContainer = withRouter(connect(null, mdp)(CreateServerForm));

export default CreateServerContainer;