define([
  'backbone',
  'views/genre',
  'collections/genres'
],function(Backbone, GenreView, GenreCollection) {
  var AppView = Backbone.View.extend({
    el: $('#wrapper'),
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.append(new GenreView({
        collection: new GenreCollection()
      }).render().el);
    }
  });

  return AppView;
});
