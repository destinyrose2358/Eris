// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});
  try {
    App.cable = ActionCable.createConsumer();
  } catch (e) {
    App.cable.connection.events.error = function(e) { console.log("My error handler:", e) }
  }
  

}).call(this);
