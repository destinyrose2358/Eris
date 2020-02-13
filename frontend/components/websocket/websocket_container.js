import { connect } from "react-redux";
import WebSocketComponent from "./websocket_component";

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: state.entities.servers,
        channels: state.entities.channels
    }
}

const mdp = (dispatch) => {
    return {
        receiveResponse: (response) => dispatch(response)
    }
}

const WebSocketContainer = connect(msp, mdp)(WebSocketComponent);

export default WebSocketContainer;