# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

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

  #flerpen's servers
  server1 = flerpen.owned_servers.create(title: "Flerpen's Kitchen",
    icon: "https://cnet4.cbsistatic.com/img/g6_kpESppCKO4SzJ0RK3VcPzRvc=/1600x900/2018/07/27/d8a4a74d-013c-4565-b4a3-5f894dc0b848/cnet-smart-home-pr-images-0035.jpg")

  server2 = flerpen.owned_servers.create(title: "Kidding Around",
    icon: "https://smhttp-ssl-87586.nexcesscdn.net/media/catalog/product/cache/212db119327a3d8587fe46a5210ddb35/E/Q/EQ1643P_001.jpg")

  server3 = flerpen.owned_servers.create(title: "Table Tops",
    icon: "https://target.scene7.com/is/image/Target/GUEST_fa339f39-08f8-4412-bbe6-3c091748f717?wid=488&hei=488&fmt=pjpeg")

  #maryllyn's servers
  server4 = maryllyn.owned_servers.create(title: "Keepin It Classy",
    icon: "https://media.nbcdfw.com/images/1200*675/Cedar+Hill+Mansion+Front.png")

  server5 = maryllyn.owned_servers.create(title: "99 Dresses",
    icon: "https://cdn20.pamono.com/p/g/2/9/293513_6pf3yzo4ds/slim-oak-wardrobe-from-heal-s-1930s-1.jpg")

  server6 = maryllyn.owned_servers.create(title: "Screamo Extremo",
    icon: "https://i.pinimg.com/originals/52/bd/1e/52bd1e11a7e828b22205d3a48c3cce26.jpg")

  #geoff's servers
  server7 = geoff.owned_servers.create(title: "Forget My Ex",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSj4Hyx6KYy-IK-R3P0qsqXblJWXNzV6ynyF7wesmLMqK6Ohe")
  
  #memberships
  membership1 = server1.members = [flerpen, maryllyn, geoff]
  membership2 = server2.members = [flerpen, geoff]
  membership3 = server3.members = [flerpen, maryllyn]
  membership4 = server4.members = [maryllyn, geoff]
  membership5 = server5.members = [maryllyn, flerpen]
  membership6 = server6.members = [maryllyn, flerpen, geoff]
  membership7 = server7.members = [geoff, maryllyn]

  #roles
  role1 = server1.roles.create(name: "test")
  role2 = server2.roles.create(name: "test")
  role3 = server3.roles.create(name: "test")
  role4 = server4.roles.create(name: "test")
  role5 = server5.roles.create(name: "test")
  role6 = server6.roles.create(name: "test")
  role7 = server7.roles.create(name: "test")

  #channels

  #server1 channels
  channel1 = server1.channels.create(title: "Toaster")
  channel2 = server1.channels.create(title: "Oven")
  channel3 = server1.channels.create(title: "Microwave")

  #server2 channels
  channel4 = server2.channels.create(title: "Ballpit")
  channel5 = server2.channels.create(title: "Easy Bake Oven")
  channel6 = server2.channels.create(title: "Shrinky-Dinks")

  #server3 channels
  channel7 = server3.channels.create(title: "Game Stuffs")
  chanell8 = server3.channels.create(title: "OC")

  #server4 channels
  channel9 = server4.channels.create(title: "Ballroom")

  #server5 channels
  channel10 = server5.channels.create(title: "Wardrobe")

  #server6 channels
  channel11 = server6.channels.create(title: "AAAAAAAAAAAAA")
  channel12 = server6.channels.create(title: "RRRRRRAAAHHH")

  #server7 channels
  channel13 = server7.channels.create(title: "Forget That Guy")

  restriction1 = channel2.restrictions.create(role_id: role1.id)
  restriction2 = channel5.restrictions.create(role_id: role2.id)

  user_role_1 = flerpen.roles.push(role1)
  user_role_2 = flerpen.roles.push(role2)
  user_role_3 = maryllyn.roles.push(role2)

  message1 = flerpen.messages.create(channel_id: channel1.id, body: "hello all you beautiful people")
end

