define([
  'base/view',
  'collections/movies',
  'text!templates/movies.html'
], function(BaseView, MovieCollection, template) {
  var MovieView = BaseView.extend({
    className: 'movie-list',
    template: template,
    ui: {
      '$filter': '#filter'
    },
    collection: MovieCollection,
    params: {
      sort_by: 'popularity.desc',
      include_adult: false,
      page: 1
    },
    events: {
      'scroll': 'handleScroll',
    },
    handleScroll: _.throttle(function() {
      this.$filter.val();
      var triggerPoint = 100;
      if(this.el.scrollTop + this.el.clientHeight + triggerPoint > this.el.scrollHeight) {
        this.params.page += 1;
        this.render();
      }
    }, 500)
  });

  return MovieView;
});
