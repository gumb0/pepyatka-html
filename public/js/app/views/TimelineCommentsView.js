define(["app/app",
        "text!templates/timelineCommentsTemplate.handlebars"], function(App, tpl) {
  "use strict";

  App.TimelineCommentsView = App.AuthorizedView.extend({
    templateName: 'timeline/comments',
    template: Ember.Handlebars.compile(tpl)
  })
})
