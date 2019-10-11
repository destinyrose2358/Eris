import React from "react";
import { Route } from "react-router-dom";
import ServerItemContainer from "./server_item_container";
import CreateServerContainer from "./create_server_container";
import isEqual from "lodash.isequal";

export default class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createServerModalOpen: false
    };
    this.openCreateServerForm = this.openCreateServerForm.bind(this);
    this.closeCreateServerForm = this.closeCreateServerForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  openCreateServerForm() {
    this.setState({createServerModalOpen: true});
  }

  closeCreateServerForm() {
    this.setState({ createServerModalOpen: false });
  }

  render() {
    let serverItems = this.props.serverIds.map(serverId => (
      <ServerItemContainer serverId={ serverId } key={ serverId } />
    ));
    return (
      <nav className="server-nav scroll">
        <ul>
          { serverItems }
          <li className="icon" onClick={ this.openCreateServerForm }>
            <i className="fas fa-plus"></i>
          </li>
        </ul>
        { this.state.createServerModalOpen && 
          <>
            <div className="translucent modal-create-server" onClick={ this.closeCreateServerForm }>
            </div>
          <CreateServerContainer resetModal={ this.closeCreateServerForm } />
          </> }
      </nav>
        
    )
  }
}