/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'collections/books/pages', ], function($, _, Backbone, PagesCollection) {



	var BookModel = Backbone.Model.extend({


		// Expected uri for data
		url: "data/bookinfo.xml",



		defaults: {
			name: "Book"
		},


		initialize: function() {

			this.pages = new PagesCollection();


		},



		// Parse the nodes into Model
		parse: function(data) {



			console.log("BookModel:parse", data);

			var parsed = {};
			parsed.pages = [];

			parsed = $.extend(parsed, $(data).find("book").data());


			var pages = [];
			$(data).find('page').each(function(index) {


				var page = {
					name: $(this).find('name').text(),
					id: index
				};

				page.areas = [
				{

					top: 100,
					left: 100,
					width: 50,
					height: 50
				}



				];

				pages.push(page);


			});


			// set data in the pages collection.
			this.pages = new PagesCollection(pages);

			return parsed;

		},



		// Fetch the xml file
		fetch: function(options) {

			console.log("BookModel:fetch");

			options = options || {};
			options.dataType = "xml";
			//options.add = true;
			//options.success =  function(collection, response){
			//	console.log("success");
			//};

			Backbone.Model.prototype.fetch.call(this, options);

		}



	});



	// Return the model for the module
	return BookModel;


});