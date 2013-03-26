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

			var index = new BookShelfView({el:"#bookshelf"});
				index.render();
		}

	});




	// exports



	BookShelf.Controller = new BookShelfController();



	//BookShelf.Views.BookShelfView = BookShelfView;
	//BookShelf.Views.BookShelf = {};
	//BookShelf.Models.Book = {};



	return BookShelf;

});