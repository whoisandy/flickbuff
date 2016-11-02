(function($, Backbone, _) {
  var AppView = Backbone.View.extend({
    el: $('#wrapper'),
    template: _.template($('#app-template').html()),
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
})(jQuery, Backbone, _);
