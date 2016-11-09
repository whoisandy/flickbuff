define([
  'underscore',
  'jquery',
  'handlebars',
  'backbone'
], function(_, $, hbs, Backbone) {
  var viewOptions = [
    'ui',
    'template',
    'templateData'
  ];

  var BaseView = Backbone.View.extend({
    constructor: function(options) {
      Backbone.View.prototype.constructor.call(this, options);
      _.extend(this, _.pick(options, viewOptions));

      var originalInitialize = this.initialize;
      this.initialize = function() {
        originalInitialize.apply(this, arguments);
        this.cacheSelectors();
      }

      var originalRender = this.render;
      this.render = function() {
        if (_.isFunction(this.beforeRender)) this.beforeRender();

        // Execute the original render function
        var result = originalRender.apply(this, arguments);
        this.cacheSelectors();

        if (_.isFunction(this.afterRender)) this.afterRender();
        return result;
      }
    },

    initialize: function() {},

    // Cache selectors
    cacheSelectors: function() {
      _.each(_.result(this, 'ui'), function(selector, key) {
        this[key] = this.$(selector);
      }, this);
    },

    // Execute afterRender function
    beforeRender: function() {},

    render: function() {
      var _this = this;
      var template = this.template;

      if(!_.isFunction(template)) {
        template = hbs.compile(template);
      }


      if( !_.isUndefined(this.collection)) {
        var collection = new this.collection();
        $.when(collection.fetch(this.params)).then(function(data) {
          _this.$el.append(template(data));
          _this.cacheSelectors();
        });
      } else {
        _this.$el.append(template(_.result(this, 'templateData')));
      }

      return this;
    },

    // Execute beforeRender function
    afterRender: function() {}
  });

  return BaseView;
});
