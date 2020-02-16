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
                { channel: "ChannelsChannel", id: pair[1] },
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

    componentDidUpdate(prevProps) {
        let changeMade = false;
        const { receiveResponse, servers, channels } = this.props;
        Object.entries(this.state.serverChannels).forEach(([serverId, subscription]) => {
            if (!servers[serverId]) {
                App.cable.subscriptions.remove(subscription);
                changeMade = true;
            }
        });

        Object.entries(this.state.channelChannels).forEach(([channelId, subscription]) => {
            if (!channels[channelId]) {
                App.cable.subscriptions.remove(subscription);
                changeMade = true;
            }
        });
        
        let serverChannels = {};
        let channelChannels = {};

        Object.entries(servers).forEach(([serverId, server]) => {
            if (this.state.serverChannels[serverId]) {
                serverChannels[serverId] = this.state.serverChannels[serverId]
            } else {
                serverChannels[serverId] = App.cable.subscriptions.create(
                    { channel: "ServersChannel", id: serverId },
                    {
                        received: receiveResponse
                    }
                );
                changeMade = true;
            }
        });

        Object.entries(channels).forEach(([channelId, channel]) => {
            if (this.state.channelChannels[channelId]) {
                channelChannels[channelId] = this.state.channelChannels[channelId]
            } else {
                channelChannels[channelId] = App.cable.subscriptions.create(
                    { channel: "ChannelsChannel", id: channelId },
                    {
                        received: receiveResponse
                    }
                );
                changeMade = true;
            }
        });

        if (changeMade) this.setState({
            serverChannels,
            channelChannels
        });
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