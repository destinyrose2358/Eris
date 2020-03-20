import React from "react";
import UserSearchContainer from "../user/search/user_search_container";

export default class ServerControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openUserSearch: false
        };
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
                <UserSearchContainer serverId={server.id} />
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
                        }, () => console.log(this.state.openUserSearch))}
                    >
                        Invite People
                    </button>
                </div>
                { userSearchModal }        
            </>
            
        )
    }
}