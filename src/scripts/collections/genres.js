define([
  'backbone',
  'base/collection'
], function(Backbone, BaseCollection) {
  var GenreModel = Backbone.Model.extend({});
  var GenreCollection = BaseCollection.extend({
    defaults: {
      genres: []
    },
    model: GenreModel,
    url: '/genre/movie/list'
  });

  return GenreCollection;
});
