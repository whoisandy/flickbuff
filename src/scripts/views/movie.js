define([
  'views/base',
  'collections/movies',
  'text!templates/movies.html'
], function(BaseView, MovieCollection, movieTemplate) {
  var MovieView = BaseView.extend({
    filter: false,
    className: 'movie-list',
    template: movieTemplate,
    meta: {
      title: 'Discover'
    },
    selectors: {
      '$filter': '#filter'
    },
    collection: MovieCollection,
    collectionParams: {
      sort_by: 'popularity.desc',
      include_adult: false,
      page: 1
    },
    events: {
      'scroll': 'handleScroll',
      'change #filter': 'filter'
    },
    filter: function(e) {
      this.collectionParams.sort_by = this.$filter.val();
      this.render();
    },
    handleScroll: _.throttle(function() {
      this.$filter.val();
      var triggerPoint = 20;
      if(this.el.scrollTop + this.el.clientHeight + triggerPoint > this.el.scrollHeight) {
        this.collectionParams.page += 1;
        this.render();
      }
    }, 500)
  });

  return MovieView;
});
