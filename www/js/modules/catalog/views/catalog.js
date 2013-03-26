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



		initialize: function() {
			console.log("CatalogView:initialize");
		},



		render: function() {

			console.log("CatalogView:render");

			// Render the template
			var compiledTemplate = _.template(htmlTemplate, {});
			this.$el.html(compiledTemplate);

			this.menu = new MenuView({
				el: "#catalogmenu"
			});

			this.menu.render();



		}



	});



	return CatalogView;

});