json.extract! user, :username, :id
json.profile_picture url_for(user.photo)