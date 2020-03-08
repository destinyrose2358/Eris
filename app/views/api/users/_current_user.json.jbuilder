json.extract! user, :email, :username, :id
json.profile_picture user.photo.attached? ? url_for(user.photo) : nil