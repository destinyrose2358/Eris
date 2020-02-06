import React from "react";
import { Route } from "react-router-dom";
import ServerItemContainer from "./server_item_container";
import CreateServerContainer from "./create_server_container";
import isEqual from "lodash.isequal";
import BaseSVG from "../svg/base_svgs";

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
      <>
        <div
          className="server-nav scroll-visible"
        >
          <div
            className="server-link icon"
          >
            <Link
              to="/channels"
            >
              {BaseSVG.erisLogo}
            </Link>
          </div>
          { serverItems }
          <div className="icon server-link" onClick={ this.openCreateServerForm }>
            <i className="fas fa-plus"></i>
          </div>
        </div>
        { this.state.createServerModalOpen && 
          <>
            <div className="translucent modal-create-server" onClick={ this.closeCreateServerForm }>
            </div>
          <CreateServerContainer resetModal={ this.closeCreateServerForm } />
          </>
        }
      </>
      
    )
  }
}