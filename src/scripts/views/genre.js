define([
  'views/base',
  'collections/genres',
  'text!templates/genres.html'
], function(BaseView, GenreCollection, sidebarTemplate) {
  var GenreView = BaseView.extend({
    className: 'genre-list',

    template: sidebarTemplate,

    collection: GenreCollection,

    events: {
      'keyup .search-input': 'handleSearch'
    },

    selectors: {
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
