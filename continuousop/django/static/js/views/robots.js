define([
  'ember',
  'app',
  'text!templates/robots.handlebars'
],
function(
  Ember,
  App,
  robotsHtml
) {

  App.RobotsView = Ember.View.extend({
    template: Ember.Handlebars.compile(robotsHtml) /*,
    didInsertElement: function() {
      $('#login-logout-link').insertBefore(".heading");
    },
    willDestroyElement: function() {
      $('#login-logout-link').appendTo("body");
    }*/
  });
});


