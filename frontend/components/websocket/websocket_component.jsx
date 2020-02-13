import React from "react";
import { ActionCable } from "react-actioncable-provider";

export default class WebSocketComponent extends React.Component {
    render() {
        const {currentUser, servers, channels, receiveResponse} = this.props;
        return (
            <>
                <ActionCable 
                    channel={{ channel: "UsersChannel" }}
                    onReceived={receiveResponse}
                />
            </>
        )
    }
}