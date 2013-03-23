/*jslint regexp: true */
/*global require,define,  
 */
define([

	'jquery',
	'underscore',
	'backbone',
	'views/catalog/menu'], function($, _, Backbone, MenuView) {


	var CatalogView = Backbone.View.extend({



		initialize: function() {
			console.log("CatalogView:initialize");


		},



		render: function() {

			console.log("CatalogView:render");

			this.menu = new MenuView(

			);



		}



	});



	return CatalogView;

});