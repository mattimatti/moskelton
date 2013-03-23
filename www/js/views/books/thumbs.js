/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/books/thumbs.html',
	'jcarousel'
	], function($, _, Backbone, htmlTemplate) {



	// A THUMBNAILS VISUALIZATION
	//---------------------
	var ThumbsView = Backbone.View.extend({



		el: this.$('#thumbs'),



		// Setup events
		events: {
			"click .thumb": "thumbClick"
		},



		// Initialize.
		initialize: function(options) {

			this.vent = options.vent;

			console.log("ThumbsView::initialize");

			this.model.on("add render change", _.debounce(this.render, 0), this);

		},



		// render the pages of the book.
		render: function() {

			console.log("ThumbsView::render");

			var compiledTemplate = _.template(htmlTemplate, {
				pages: this.model.pages.models
			});
			this.$el.html(compiledTemplate);

			this.initCarousel();


		},



		initCarousel: function() {

			this.$el.jcarousel();


		},



		// When user clicks on a thumb.
		thumbClick: function(e) {
			
			var itemIndex = $(e.currentTarget).attr("data-id");
				// increment thumb index as the book is not 0 based.
				itemIndex++;
			console.log("thumbClick",itemIndex);
			this.vent.trigger("Thumb:click", itemIndex);

		}



	});



	// Our module now returns our view
	return ThumbsView;



});