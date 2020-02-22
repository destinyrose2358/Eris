import {React} from "react";

export default class ChannelTitle extends React.Component {
    render() {
        return (
            <h1
                className="channel-title"
            >
                {this.props.channel.title}
            </h1>
        )
    }
}