define([
  'backbone'
], function(Backbone) {
  var GenreModel = Backbone.Model.extend({});
  var GenreCollection = Backbone.Collection.extend({
    defaults: {
      genres: []
    },
    model: GenreModel,
    url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=d257c9e25c34810d8264fbd02a8cee03&language=en-US'
  });

  return GenreCollection;
});
