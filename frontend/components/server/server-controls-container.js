import { connect } from "react-redux";
import ServerControls from "./server-controls";

const mdp = (dispatch, { server }) => {
    return {

    }
}

const ServerControlsContainer = connect(null, mdp)(ServerControls);

export default ServerControlsContainer;