/*jslint regexp: true */
/*global require,define,  
 */
define([

	'jquery',
	'underscore',
	'backbone'], function($, _, Backbone) {


	var CatalogIndexModel = Backbone.Model.extend({


		initialize: function(options) {
			this.url = options.url;
		},


		parse: function(response) {
			
			return response.catalogindex;
		},




	});



	return CatalogIndexModel;

});