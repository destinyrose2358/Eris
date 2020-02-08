import React from "react";
import { Link } from "react-router-dom";
import ServerItemContainer from "./server_item_container";
import CreateServerContainer from "./create_server_container";
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
    let isDisabled = this.props.location.pathname.split("/")[1] === `channels`;
    let homeLink = isDisabled ?
      <div
        className="server-link icon fake"
      >
        {BaseSVG.erisLogo}
      </div>
    : 
      <div
        className="server-link icon"
      >
        <Link
          to="/channels"
        >
          {BaseSVG.erisLogo}
        </Link>
      </div>;
    return (
      <>
        <div
          className="server-nav scroll-visible"
        >
          {homeLink}
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