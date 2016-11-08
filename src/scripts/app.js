define([
  'handlebars',
  'backbone',
  'views/genre',
  'views/movie'
],function(Handlebars, BaseView, GenreListView, MovieListView) {
  Handlebars.registerHelper('image', function(path) {
    var imageUrl;
    if(path !== null) {
      imageUrl = 'https://image.tmdb.org/t/p/w154' + path;
    } else {
      imageUrl = 'https://placehold.it/154x218?text="No Image Found"';
    }

    return new Handlebars.SafeString("<img src='" + imageUrl + "'/>");
  });

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
