import React from "react";

export default class ServerItem extends React.Component {
  render() {
    let { server } = this.props;
    return (
      <li>
        <img className="icon" src={ server.icon } alt={`${server.title}'s Icon`}/>
      </li>
    )
  }
}