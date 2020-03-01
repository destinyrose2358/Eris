import { connect } from "react-redux";
import WebSocketComponent from "./websocket_component";
import { fetchServers } from "../../actions/server_actions";
import { fetchDirectChannels } from "../../actions/channel_actions";

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: state.entities.servers,
        channels: state.entities.channels
    }
}

const mdp = (dispatch) => {
    return {
        receiveResponse: (response) => {
            return dispatch(JSON.parse(response));
        },
        fetchServers: () => {
            return dispatch(fetchServers());
        },
        fetchDirectChannels: () => {
            return dispatch(fetchDirectChannels());
        }
    }
}

const WebSocketContainer = connect(msp, mdp)(WebSocketComponent);

export default WebSocketContainer;