/*jslint regexp: true */
/*global require,define,  
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/books/pages'], function($, _, Backbone, PageModel) {


  var PageCollection = Backbone.Collection.extend({


    model: PageModel,



  });


  // You don't usually return a collection instantiated
  return PageCollection;


});