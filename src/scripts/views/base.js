define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {
  var viewOptions = ['elements'];

  var BaseView = Backbone.View.extend({
    initialize: function(options) {
      Backbone.View.prototype.initialize.call(this, options);
      _.extend(this, _.pick(options, viewOptions));
      // console.log(_.result(this, 'elements'));
      this.updateElements();
    },

    updateElements: function() {
      // _.each(_.result(this, 'elements'), function(selector, key) {
      //   this[key] = this.$(selector);
      // }, this);
      console.log(this.$('.search-input'));
    },

    render: function() {
      return this;
    }
  });

  return BaseView;
});
