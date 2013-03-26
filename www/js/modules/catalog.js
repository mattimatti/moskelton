/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	"app",
	'views/catalog/catalog'], function($, _, Backbone, app, CatalogView) {


	var Catalog = app.module();

	Catalog.Views.CatalogView = CatalogView;


	//BookShelf.Views.BookShelf = {};
	//BookShelf.Models.Book = {};



	return Catalog;

});