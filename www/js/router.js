/*jslint regexp: true */
/*global require,define,  
 */
// Setup the App router
define([
  'jquery',
  'underscore',
  'backbone',

  'modules/bookshelf',
  'modules/catalog',
  'modules/dashboard'


], function($, _, Backbone, BookShelf, Catalog, DashBoard) {



  var Router = Backbone.Router.extend({



    defaultModule: "dashboard",



   



    // the modules
    modules: {

      "bookshelf": BookShelf,
      "catalog": Catalog,
      "dashboard": DashBoard

    },



    // startup routing
    initRouting: function() {

      console.log('initRouting');

      Backbone.history.start();

    },



    // Define the routes in a Zend Fashion
    routes: {

      'bookshelf*allroute': 'bookshelfRoute',
      'catalog*allroute': 'catalogRoute',
      '*allroute': 'defaultRoute'

    },



    // enter the bookshelfRoute
    bookshelfRoute: function(allroute) {

      allroute = allroute || "index/index";

      this._enrouteToModule("bookshelf", allroute);

    },



    // enter the catalogRoute
    catalogRoute: function(allroute) {

      allroute = allroute || "index/index";

      this._enrouteToModule("catalog", allroute);

    },



    // enter the defaultRoute
    defaultRoute: function(allroute) {

      allroute = allroute || "index/index";

      this._enrouteToModule(this.defaultModule, allroute);


    },



    _enrouteToModule: function(module, allroute) {

      var params,_params,i;

      var routeArray = allroute.split("/");
      if(routeArray[0] === ""){
        routeArray[0] = "index";
      }


      var moduleName = module;
      var controllerName = routeArray[0];
      var actionName = routeArray[1];


      params = [];
      _params = routeArray.splice(2);

      for (i = 0; i < _params.length; i++) {
        params[_params[i]] = _params[i+1];
        i++;
      }


      if(!this.modules[moduleName]){
          throw "module "+moduleName+" doesn't exist";
      }

      if(!this.modules[moduleName].Controller){
          throw "controller  in module "+moduleName+" doesn't exist";
      }
      if(!this.modules[moduleName].Controller[actionName + "Action"]){
          throw "action: "+actionName+" in module "+moduleName+".Controller doesn't exist";
      }

      this.modules[module].Controller[actionName + "Action"](params);


    }

  });



  return Router;


});