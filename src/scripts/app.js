define([
  'backbone',
  'helpers',
  'views/genre',
  'views/movie'
],function(Backbone, Helpers, GenreListView, MovieListView) {
  Helpers.register();

  var AppView = Backbone.View.extend({
    el: '#wrapper',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el
        .append(new GenreListView().render().el)
        .append(new MovieListView().render().el)
    }
  });

  return AppView;
});
