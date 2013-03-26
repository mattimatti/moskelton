/*jslint regexp: true */
/*global require,define,  
 */
define([

	'jquery',
	'underscore',
	'backbone',
	'text!templates/bookshelf/bookshelf.html'

], function($, _, Backbone,htmlTemplate) {


	var BookShelfView = Backbone.View.extend({



		initialize: function() {
			console.log("BookShelfView:initialize");


		},



		render: function() {
			console.log("BookShelfView:render");

			// Render the template
			var compiledTemplate = _.template(htmlTemplate, {});
			this.$el.html(compiledTemplate);



		}



	});



	return BookShelfView;

});