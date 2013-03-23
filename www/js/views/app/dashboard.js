/*jslint regexp: true */
/*global require,define,  
 */
define([

	'jquery',
	'underscore',
	'backbone'

], function($, _, Backbone) {


	var DashBoardView = Backbone.View.extend({



		initialize: function() {
			console.log("DashBoardView:initialize");



		},



		render: function() {
			console.log("DashBoardView:render");



		}



	});



	return DashBoardView;

});