/*jslint regexp: true */
/*global require,define,  
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/app/configModel',
  'views/app/layout'

], function($, _, Backbone, ConfigModel, Layout) {


  var app = {};



  app = _.extend(app, {

    layout: new Layout({
      el: "#app"
    }),

    // create modular structure
    module: function(additionalProps) {
      return _.extend({
        Views: {},
        Models: {}
      }, additionalProps);
    },



    main: function() {
      console.log("bootstrap main");
      this.loadConfig();
    },



    // load a configuration file.
    loadConfig: function() {

      console.log("loadConfig");

      var config = new ConfigModel();
      config.on("add fetch reset change", this.ready, this);
      config.fetch();

    },



    // render the 
    ready: function() {



      // render the main layout
      this.layout.render();

      // initialize routing
      this.router.initRouting();

    },



    // Facade method to redirect to page.
    redirect: function(url, trigger) {
      trigger = trigger || true;
      this.router.navigate(url, {
        trigger: trigger
      });
    },



    // Shows a given view
    render: function(viewObject) {

      console.log("=====app.render=====");


      if(this.currentView){
        this.currentView.remove();
      }
      
     //viewObject.setElement(this.layout.el);

      this.currentView = viewObject;


      // append the element to the dom.
      this.layout.$el.append(this.currentView.el);


      // predispatch method
      if (this.currentView.beforeRender){
        this.currentView.beforeRender();
      } 


      // render the current view
      this.currentView.render();
      

      



      if (this.currentView.afterRender){
        this.currentView.afterRender();
      } 


      console.log(this.currentView);

    }



  }, Backbone.Events);



  // export for AMD
  return app;


});