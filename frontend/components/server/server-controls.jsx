import React from "react";
import UserSearchContainer from "../user/search/user_search_container";
import SVG from "../svg/base_svgs";

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
                $("body").off("click");
            })
        });
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
                
        return <>
                <div
                    className="server-controls"
                    onClick={() => {
                        this.setState({
                            menuOpen: !menuOpen
                        });
                    }}
                >
                    <aside
                        className="server-controls-tab"
                    >
                        <h1>{server.title}</h1>
                        { SVG.close }
                        <div
                            className="server-controls-icon-mask"
                        />
                    </aside>
                    {
                        menuOpen ?
                            <div
                                className="server-controls-menu"
                            >
                                <div>
                                    
                                </div>
                                <button
                                    onClick={() => this.setState({
                                        openUserSearch: true
                                    })}
                                >
                                    Invite People
                                </button>
                            </div>
                        :
                            null
                    }
                </div>
                { userSearchModal }        
            </>
    }
}