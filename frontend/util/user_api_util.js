
export const requestUser = userId => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  })
)

export const updateUser = (userData, id) => (
  $.ajax({
    method: "PATCH",
    url: `api/users/${id}`,
    data: userData,
    processData: false,
    contentType: false
  })
);

export const capUsername = username => username.length > 8 ? username.slice(0, 8) + "..." : username;