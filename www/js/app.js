/*jslint regexp: true */
/*global require,define,  
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'router', 
], function($, _, Backbone, Router){
	
	
  var initialize = function(){
    console.log("App:ininitialize");
    // Pass in our Router module and call it's initialize function
    Router.initialize();
    
  };

  return {
    initialize: initialize
  };

  
});
