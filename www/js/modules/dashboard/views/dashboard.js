/*jslint regexp: true */
/*global require,define,  
 */
define([

	'jquery',
	'underscore',
	'backbone',
	'text!templates/dashboard/dashboard.html'

], function($, _, Backbone,htmlTemplate) {


	var DashBoardView = Backbone.View.extend({


		initialize: function() {
			console.log("DashBoardView:initialize");

		},



		render: function() {
			console.log("DashBoardView:render");

			console.log(this.$el);

			// Render the template
			var compiledTemplate = _.template(htmlTemplate, {});
			this.$el.html(compiledTemplate);



		}



	});



	return DashBoardView;

});