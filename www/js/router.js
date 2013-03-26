/*jslint regexp: true */
/*global require,define,  
 */
// Setup the App router
define([
  'jquery',
  'underscore',
  'backbone',


  'app',
  'models/app/configModel',
  'views/app/layout',

  'modules/bookshelf',
  'modules/catalog',
  'modules/dashboard'


], function($, _, Backbone, app, ConfigModel, Layout, BookShelf, Catalog, DashBoard) {



  var Router = Backbone.Router.extend({



    app : app,



    // initialize the router.
    initialize: function() {

      console.log('initialize');

      this.loadConfig();

      return this;


    },



    // load a configuration file.
    loadConfig: function() {


      var config = new ConfigModel();
      config.on("add fetch reset change", this.initRouting,this);
      config.fetch();



    },


    // startup routing
    initRouting: function() {

      console.log('initRouting');

      this.render();

      Backbone.history.start();

    },



    // Define the routes
    routes: {
      'catalog/:product': 'catalogAction',
      'bookshelf/:book': 'bookShelfAction',
      'bookshelf': 'bookShelfAction',
      'catalog': 'catalogAction',
      '*actions': 'defaultAction'
    },



    // the main layout of this app.
    layout : new Layout({ el: "#app" }),




    // the subviews
    views: {

      "bookshelf": new BookShelf.Views.BookShelfView({
        el: "#bookshelf"
      }),
      "catalog": new Catalog.Views.CatalogView({
        el: "#catalog"
      }),
      "dashboard": new DashBoard.Views.DashboardView({
        el: "#dashboard"
      })

    },



    // enter the bookshelf
    bookShelfAction: function(book) {
      console.log("bookShelfAction:", book);
    },



    // enter the catalog
    catalogAction: function(product) {
      console.log("catalogAction:", product);
    },



    // enter the dashboard
    defaultAction: function(actions) {
      // We have no matching route, lets just log what the URL was
      console.log('defaultAction:', actions);
    },



    // render the 
    render: function() {


      this.layout.render();


      // init views
      _.each(this.views, function(view) {
        view.render();
      });



    }

  });



  return Router;


});