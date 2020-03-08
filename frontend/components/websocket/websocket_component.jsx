import React from "react";
import { API_WS_ROOT } from "../../constants/root";

export default class WebSocketComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userChannel: null,
            serverChannels: {},
            channelChannels: {}
        }
        this.connectUser = this.connectUser.bind(this);
    }

    componentDidMount() {
        this.connectUser();
    }

    connectUser() {
        const { receiveResponse, fetchServers, fetchDirectChannels, currentUser} = this.props;
        const userChannel = App.cable.subscriptions.create(
                { channel: "UsersChannel" },
                {
                    received: receiveResponse,  
                    connected: () => {
                        this.setState({
                            userChannel
                        }, () => {
                            fetchServers();
                            fetchDirectChannels();
                        });
                    }
                }
            );
    }

    componentWillUnmount() {
        Object.values(this.state).forEach(value => {
            if (!value.consumer) {
                Object.values(value).forEach(subscription => {
                    App.cable.subscriptions.remove(subscription);
                })
            } else {
                App.cable.subscriptions.remove(value);
            }
        })
        App.cable.disconnect();
        App.cable = ActionCable.createConsumer(API_WS_ROOT);
    }

    componentDidUpdate(prevProps) {
        let changeMade = false;
        const { receiveResponse, servers, channels, currentUser } = this.props;
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