/*jslint regexp: true */
/*global require,define,  
 */
define([
  'jquery',
  'underscore',
  'backbone'], function($, _, Backbone) {

  var app = {};

  app = _.extend(app, {

    // create modular structure
    module: function(additionalProps) {
      return _.extend({
        Views: {}
      }, additionalProps);
    },


    main: function(){

    }




  }, Backbone.Events);


  return app;


});