(function($, Backbone, _,hbs) {
  var AppView = Backbone.View.extend({
    el : $('#wrapper'),
    template : hbs.compile($('#app-template').html()),
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(this.template({
        message: 'My Backbone App'
      }));
    }
  });

  var app = new AppView();
})(jQuery, Backbone, _, Handlebars);
