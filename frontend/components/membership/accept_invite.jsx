import React from "react";
import { Redirect } from "react-router-dom";

const AcceptInvite = (props) => {
    props.acceptInvite();
    return <Redirect to="/channel" />
}

export default AcceptInvite;