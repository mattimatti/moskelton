// Setup the App router
define([
  'jquery',
  'underscore',
  'backbone',
  'views/chrome'], function($, _, Backbone, ChromeView) {

  var AppRouter = Backbone.Router.extend({


    routes: {
      '*actions': 'defaultAction'
    },


    defaultAction: function(actions) {
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);

      var main = new ChromeView();
      main.render();


    }



  });


  // Router initialization.
  var initialize = function() {

    console.log('AppRouter::initialize');

    var app_router = new AppRouter();

    // init the history.
    Backbone.history.start({
      pushState: true
    });

  };



  return {
    initialize: initialize
  };


});