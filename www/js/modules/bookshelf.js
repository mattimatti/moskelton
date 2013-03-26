/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'app',
	'modules/bookshelf/views/bookshelf'], function($, _, Backbone, app, BookShelfView) {



	var BookShelf = app.module();



	var BookShelfController = Backbone.Router.extend({

		initialize: function() {

			console.log("BookShelf:Index:initialize");

		},

		indexAction: function(params) {
			console.log("BookShelf:Index:indexAction",params);
		},


		pepeAction :function(params){
			console.log("BookShelf:Index:pepeAction",params);
		}


	});




	// exports



	BookShelf.Controller = new BookShelfController();



	//BookShelf.Views.BookShelfView = BookShelfView;
	//BookShelf.Views.BookShelf = {};
	//BookShelf.Models.Book = {};



	return BookShelf;

});