/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	"app",
	'views/bookshelf/bookshelf'], function($, _, Backbone, app, BookShelfView) {

	console.log(app);

	var BookShelf = app.module();

	BookShelf.Views.BookShelfView = BookShelfView;
	//BookShelf.Views.BookShelf = {};
	//BookShelf.Models.Book = {};



	return BookShelf;

});