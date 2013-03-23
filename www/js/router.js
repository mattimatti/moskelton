/*jslint regexp: true */
/*global require,define,  
 */
// Setup the App router
define([
  'jquery',
  'underscore',
  'backbone',
  'models/app/configModel',
  'views/chrome',
  'views/catalog/catalog',
  'views/app/bookshelf'

  ], function($, _, Backbone, ConfigModel, ChromeView, CatalogView,BookShelfView) {



  var AppController = Backbone.Router.extend({


    // Define the routes
    routes: {
      'catalog/:product': 'catalogAction',
      'bookshelf/:book': 'bookShelfAction',
      'bookshelf': 'bookShelfAction',
      'catalog': 'catalogAction',
      '*actions': 'defaultAction'
    },




    // enter the bookshelf
    bookShelfAction: function(book) {

      console.log("bookShelfAction:", book);

      var bookshelf = new BookShelfView({
        el: "#bookshelf"
      });
      bookshelf.render();


    },




    // enter the catalog
    catalogAction: function(product) {

      console.log("catalogAction:", product);
      var catalog = new CatalogView({
        el: "#catalog"
      });
      catalog.render();
      
    },





    // enter the dashboard
    defaultAction: function(actions) {
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);

      var main = new ChromeView({
        el: "#app"
      });
      main.render();


    }




  });



  var initRouting = function(){


    var app_router = new AppController();
    Backbone.history.start();

  };





  var initConfig = function(){

      // initialize config;
      var config= new ConfigModel();
          config.on("add fetch reset change", initRouting);
          config.fetch();
  };





  // Router initialization.
  var initialize = function() {

    console.log('AppRouter::initialize');

    initConfig();

  };



















  return {
    initialize: initialize
  };


});