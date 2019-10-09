# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#users
flerpen = User.create(username: "Flerpen",
  password: "hunter2",
  email: "flerpen@gler.fer",
  profile_picture: "https://pbs.twimg.com/media/DEE_v61XUAEp5wx.jpg")

maryllyn = User.create(username: "Maryllyn",
  password: "hunter2",
  email: "maryllyn@classy.class",
  profile_picture: "https://www.lunss.com/uploads/product/1/X/1X189/Lavender-Off-the-Shoulder-Long-Ball-Gown-Pageant-Dress-with-High-Slit-1.jpg")

geoff = User.create(username: "Geoff_Grandsoul",
  password: "hunter2",
  email: "geoff1905@gmail.com",
  profile_picture: "https://images.uesp.net/thumb/8/8e/OB-item-Black_Soul_Gem.jpg/250px-OB-item-Black_Soul_Gem.jpg")

#servers
server1 = flerpen.owned_servers.create(title: "Flerpen's Kitchen",
  icon: "https://cnet4.cbsistatic.com/img/g6_kpESppCKO4SzJ0RK3VcPzRvc=/1600x900/2018/07/27/d8a4a74d-013c-4565-b4a3-5f894dc0b848/cnet-smart-home-pr-images-0035.jpg")

server2 = maryllyn.owned_servers.create(title: "Keepin It Classy",
  icon: "https://media.nbcdfw.com/images/1200*675/Cedar+Hill+Mansion+Front.png")

#memberships
membership1 = server1.members = [flerpen, maryllyn, geoff]
membership2 = server2.members = [maryllyn, geoff]