require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: '$'
    },
    velocity: {
      deps: [
        'jquery'
      ]
    },
    backbone: {
      deps: [
        'jquery',
        'underscore'
      ],
      exports: 'Backbone'
    },
  },

  paths: {
    jquery: '../../bower_components/jquery/dist/jquery.min',
    velocity: '../../bower_components/velocity/velocity.min',
    backbone: '../../bower_components/backbone/backbone-min',
    underscore: '../../bower_components/underscore/underscore-min',
    handlebars: '../../bower_components/handlebars/handlebars.min',
    text: '../../bower_components/text/text'
  }
});

require([
  'app',
  'velocity'
], function(App, velocity) {
  var app = new App();
});
