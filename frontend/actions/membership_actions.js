import * as MembershipAPIUtil from "../util/membership_api_util";
import { receiveDirectChannel } from "./channel_actions";
import { receiveServer } from "./server_actions";

export const inviteUser = (serverId, userId) => (
    MembershipAPIUtil.inviteUser(serverId, userId)
);

export const acceptInvite = (membershipId) => dispatch => (
    MembershipAPIUtil.acceptInvite(membershipId)
);