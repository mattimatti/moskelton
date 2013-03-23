/*jslint regexp: true */
/*global require,define,  
 */
define([

	'jquery',
	'underscore',
	'backbone'], function($, _, Backbone) {


	var BooksIndexModel = Backbone.Model.extend({


		initialize: function(options) {
			this.url = options.url;
		},



		parse: function(response) {
			//console.log("parse",response);
			return response.booksindex;
		},


	


	});



	return BooksIndexModel;

});