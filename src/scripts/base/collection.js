define([
  'jquery',
  'backbone'
], function($, Backbone) {
  var BaseCollection = Backbone.Collection.extend({
    baseUrl: 'https://api.themoviedb.org/3',
    construct: function(params) {
      return this.baseUrl + this.url + '?' + $.param(params);
    },
    initialize: function() {
      this.fetch = function(options) {
        var deferred = $.Deferred();
        var options = options || {};
        var defaults = {
          api_key: 'd257c9e25c34810d8264fbd02a8cee03',
          language: 'en-US'
        };
        var params = _.extend({}, defaults, options);
        var endpointUrl = this.construct(params);

        return $.ajax({
          url: endpointUrl,
          success: deferred.resolve,
          error: deferred.reject
        });
      }
    }
  });

  return BaseCollection;
});
