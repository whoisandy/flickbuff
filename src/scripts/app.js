define([
  'backbone',
  'utils/index',
  'views/genre',
  'views/movie'
],function(BaseView, Utils, GenreListView, MovieListView) {
  Utils.init();

  var AppView = Backbone.View.extend({
    el: $('#wrapper'),

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el
        .append(new GenreListView().render().el)
        .append(new MovieListView().render().el);
    }
  });

  return AppView;
});
