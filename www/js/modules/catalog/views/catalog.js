/*jslint regexp: true */
/*global require,define,  
 */
define([

	'jquery',
	'underscore',
	'backbone',
	'modules/catalog/views/menu',
	'text!templates/catalog/catalog.html'

], function($, _, Backbone, MenuView, htmlTemplate) {


	var CatalogView = Backbone.View.extend({


		views: {},


		initialize: function() {
			console.log("CatalogView:initialize");
		},




		render: function() {

			console.log("CatalogView:render");

			// Render the template
			var compiledTemplate = _.template(htmlTemplate, {});
			this.$el.html(compiledTemplate);

			this.views.menu = new MenuView({
				el: "#catalogmenu"
			});

			this.views.menu.render();



		}



	});



	return CatalogView;

});