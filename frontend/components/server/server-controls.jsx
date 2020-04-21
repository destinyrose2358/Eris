import React from "react";
import UserSearchContainer from "../user/search/user_search_container";

export default class ServerControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openUserSearch: false
        };
        this.toggleUserSearch = this.toggleUserSearch.bind(this);
    }

    toggleUserSearch() {
        this.setState((prevState) => ({
            openUserSearch: !prevState.openUserSearch
        }));
    }

    render() {
        const { server } = this.props;
        const { openUserSearch } = this.state;
        let userSearchModal = openUserSearch ?
            <>
                <div
                    className={`modal-user-search translucent`}
                    onClick={() => this.setState({
                        openUserSearch: false
                    })}
                >
                </div>
                <UserSearchContainer serverId={server.id} toggleUserSearch={this.toggleUserSearch} />
            </>
        :
            null;
                
        return (
            <>
                <div
                    className="server-controls"
                >
                    <button
                        onClick={() => this.setState({
                            openUserSearch: true
                        })}
                    >
                        Invite People
                    </button>
                </div>
                { userSearchModal }        
            </>
            
        )
    }
}