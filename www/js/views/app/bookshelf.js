/*jslint regexp: true */
/*global require,define,  
 */
define([

	'jquery',
	'underscore',
	'backbone'

], function($, _, Backbone) {


	var BookShelfView = Backbone.View.extend({



		initialize: function() {
			console.log("BookShelfView:initialize");


		},



		render: function() {
			console.log("BookShelfView:render");


		}



	});



	return BookShelfView;

});