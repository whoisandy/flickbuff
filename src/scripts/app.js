define([
  'backbone',
  'utils',
  'views/genre',
  'views/movie'
],function(Backbone, Utils, GenreListView, MovieListView) {
  Utils.registerHelpers();
  Utils.registerTemplates();

  var AppView = Backbone.View.extend({
    el: '#wrapper',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.append(new GenreListView().render())
      this.$el.append(new MovieListView().render())
    }
  });

  return AppView;
});
