/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	"app",
	'views/dashboard/dashboard'], function($, _, Backbone, App, DashboardView) {


	var Dashboard = App.module();

		Dashboard.Views.DashboardView = DashboardView;
	//BookShelf.Views.BookShelf = {};
	//BookShelf.Models.Book = {};



	return Dashboard;

});