define([
  'jquery',
  'base/view',
  'collections/genres',
  'text!templates/genres.html'
], function($, BaseView, GenreCollection, template) {
  var GenreView = BaseView.extend({
    className: 'genre-list',

    template: template,

    collection: GenreCollection,

    events: {
      'keyup .search-input': 'handleSearch'
    },

    ui: {
      '$searchInput': '.search-input'
    },

    handleSearch: function(e) {
      if(e.keyCode === 13) {
        console.log('Searching for the movie: ' + this.$searchInput.val());
        this.$searchInput.val("");
      }
    }
  });

  return GenreView;
})
