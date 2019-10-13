
export const requestUser = userId => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  })
)

export const capUsername = username => username.length > 8 ? username.slice(0, 8) + "..." : username;