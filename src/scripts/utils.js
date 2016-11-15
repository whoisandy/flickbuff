define([
  'handlebars',
  'helpers'
], function(hbs, helpers) {
  var Utils = {
    registerHelpers: function() {
      Object.keys(helpers).forEach(function(method) {
        hbs.registerHelper(method, this[method]);
      }, helpers);
    },

    registerTemplates: function() {

    }
  };

  return Utils;
});
