/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	"app",
	'modules/catalog/views/catalog'], function($, _, Backbone, app, CatalogView) {


	var Catalog = app.module();


	// the local router
	var CatalogController = Backbone.Router.extend({


		routes:{

			'shosho' :"indexAction"

		},




		initialize: function() {

			console.log("Catalog:Index:initialize");

		},

		indexAction: function(params) {
			console.log("Catalog:Index:indexAction",params);
			var index = new CatalogView();
				app.render(index);
		}


	});






	Catalog.Controller = new CatalogController();



	return Catalog;

});