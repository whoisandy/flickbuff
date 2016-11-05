require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: '$'
    },
    backbone: {
      deps: [
        'jquery',
        'underscore'
      ],
      exports: 'Backbone'
    }
  },

  paths: {
    jquery: '../../bower_components/jquery/dist/jquery.min',
    backbone: '../../bower_components/backbone/backbone-min',
    underscore: '../../bower_components/underscore/underscore-min',
    handlebars: '../../bower_components/handlebars/handlebars.min',
    text: '../../bower_components/text/text'
  }
});

require([
  'app'
], function(App) {
  var app = new App();
  // console.log(app);
});
