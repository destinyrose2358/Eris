json.type @type
json.extract! @membership :memberable_id, :user_id
json.user do
    json.partial! "api/users/user", user: @membership.user
end