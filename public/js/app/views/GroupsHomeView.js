define(["app/app",
        "text!templates/groupsHomeTemplate.handlebars"], function(App, tpl) {
  "use strict";

  App.GroupsHomeView = App.AuthorizedView.extend({
    templateName: 'groups-home',
    template: Ember.Handlebars.compile(tpl)
  })
})
