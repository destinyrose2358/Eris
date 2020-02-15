import React from "react";
import { ActionCable } from "react-actioncable-provider";

export default class WebSocketComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userChannel: null,
            serverChannels: {},
            channelChannels: {}
        }
    }
    componentDidMount() {
        const { receiveResponse, servers, channels } = this.props;
        const userChannel = App.cable.subscriptions.create(
            { channel: "UsersChannel" },
            {
                received: receiveResponse
            }  
        );
        const serverChannels = {};
        Object.entries(servers).forEach(pair => {
            serverChannels[pair[0]] = App.cable.subscriptions.create(
                { channel: "ServersChannel", id: pair[1] },
                {
                    received: receiveResponse
                }
            )
        });
        const channelChannels = {};
        Object.entries(channels).forEach(pair => {
            channelChannels[pair[0]] = App.cable.subscriptions.create(
                { channel: "channelsChannel", id: pair[1] },
                {
                    received: receiveResponse
                }
            )
        })
        this.setState({
            userChannel,
            serverChannels,
            channelChannels
        })
    }

    render() {
        const {currentUser, servers, channels, receiveResponse} = this.props;
        return (
            <div
                className="websocket"
            >
            </div>
        )
    }
}