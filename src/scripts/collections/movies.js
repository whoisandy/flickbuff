define([
  'backbone',
  'base/collection'
], function(Backbone, BaseCollection) {
  var MovieModel = Backbone.Model.extend({});
  var MovieCollection = BaseCollection.extend({
    model: MovieModel,
    url: '/discover/movie'
  });

  return MovieCollection;
});
