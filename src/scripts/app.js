(function($, Backbone, _) {
  var AppView = Backbone.View.extend({
    el: $('#wrapper'),
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html('<h1>My Backbone App</h1>')
    }
  });

  var app = new AppView();
})(jQuery, Backbone, _);
