import React from "react";
import UserSearchContainer from "../user/search/user_search_container";

export default class ServerControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openUserSearch: false,
            menuOpen: false
        };
        this.toggle = this.toggle.bind(this);
        this.closeOnClick = this.closeOnClick.bind(this);
    }

    closeOnClick() {
        $("body").on("click", e => {
            this.setState({
                menuOpen: false
            }, () => {
                console.log("event hit");
                console.log(this.state.menuOpen);
                $("body").off("click");
            })
        })
        console.log("made event");
    }

    toggle(field) {
        return () => {
            this.setState((prevState) => ({
                [field]: !prevState[field]
            }));
        }
    }

    render() {
        const { server } = this.props;
        const { openUserSearch, menuOpen } = this.state;
        let userSearchModal = openUserSearch ?
            <>
                <div
                    className={`modal-user-search translucent`}
                    onClick={() => this.setState({
                        openUserSearch: false
                    })}
                >
                </div>
                <UserSearchContainer serverId={server.id} toggleUserSearch={this.toggle("openUserSearch")} />
            </>
        :
            null;
                
        return ( menuOpen ?
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
            :
            <>
                <div
                    className="server-controls"
                    onClick={() => {
                        !menuOpen && this.closeOnClick();
                        this.setState({
                            menuOpen: true
                        });
                    }}
                >
                    <h1>{server.title}</h1>
                </div>
            </>

            
        )
    }
}