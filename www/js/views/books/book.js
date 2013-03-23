/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'views/books/turnpage',
	'views/books/thumbs',
	'views/books/toolbar',
	'models/books/book',
	'text!templates/books/book.html'], function($, _, Backbone, TurnPageView, ThumbsView, ToolbarView, BookModel, mainTemplate,window) {


	var BookView = Backbone.View.extend({



		initialize: function(options) {

			console.log("BookView::initialize");

			// Create an event aggregate.
			// This allows event comunication between the subviews.
			// the deeper you instance it, upper the bubbles go up.

			this.vent = _.extend({}, Backbone.Events);

			// Instance the book Model.
			this.bookModel = new BookModel();


			this.render();

			this.initModel();

		},



		// Initialize the book collection
		initModel: function() {

			this.bookModel.fetch();

		},


		// RE
		render: function() {

			console.log("BookView::render");


			$(window).bind("resize.app", _.bind(this.resize, this));

			var compiledTemplate = _.template(mainTemplate, {});
			this.$el.html(mainTemplate);


			// initialize the book view
			this.bookView = new TurnPageView({
				model: this.bookModel,
				vent: this.vent,
				el:"#book"
			});

			
			// initialize the thumbs view
			this.thumbsView = new ThumbsView({
				model: this.bookModel,
				vent: this.vent,
				el:"#thumbs"
			});

			// initialize the thumbs view
			this.toolbarView = new ToolbarView({
				model: this.bookModel,
				vent: this.vent,
				el:"#toolbar"
			});
			


		},



		// Bubbles the resize event to the listening subviews.
		resize: function(e) {
			this.vent.trigger("resize", e);
		},



		// When removing this view.
		// Do some events cleanup.
		remove: function() {
			$(window).unbind("resize.app");
		}



	});



	return BookView;

});