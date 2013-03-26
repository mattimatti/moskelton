/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'app',
	'modules/dashboard/views/dashboard'], function($, _, Backbone, app, DashboardView) {


	var Dashboard = app.module();



	// the local Controller.
	var DashboardController = Backbone.Router.extend({



		initialize: function() {

			console.log("Dashboard:Index:initialize");

		},



		indexAction: function(params) {
			console.log("Dashboard:Index:indexAction",params);


		}


	});










	Dashboard.Controller = new DashboardController();


	return Dashboard;

});