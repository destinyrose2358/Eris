json.extract! user, :email, :username, :id
json.profile_picture url_for(user.photo)