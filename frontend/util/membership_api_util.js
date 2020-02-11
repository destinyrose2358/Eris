export const inviteUser = (serverId, userId) => (
    $.ajax({
        method: "POST",
        url: `api/servers/${serverId}/memberships`,
        data: { membership: { user_id: userId } }
    })
);

export const addUserToDM = (channelId, userId) => (
    $.ajax({
        method: "POST",
        url: `api/channels/${channelId}/memberships`,
        data: { membership: { user_id: userId } }
    })
);

export const acceptInvite = (membershipId) => (
    $.ajax({
        method: "PATCH",
        url: `api/memberships/${membershipId}`
    })
);

export const removeUser = (membershipId) => (
    $.ajax({
        method: "DELETE",
        url: `api/memberships/${membershipId}`
    })
)