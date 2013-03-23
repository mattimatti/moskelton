/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/books/toolbar.html',
	'jcarousel'
	], function($, _, Backbone, htmlTemplate) {



	// A THUMBNAILS VISUALIZATION
	//---------------------
	var ToolbarView = Backbone.View.extend({



		el: this.$('#toolbar'),



		// Setup events
		events: {
			
		},



		// Initialize.
		initialize: function(options) {

			// the event aggregate
			this.vent = options.vent;

			console.log("ToolbarView::initialize");

			this.model.on("add render change", _.debounce(this.render, 0), this);

		},



		// render the pages of the book.
		render: function() {

			console.log("ToolbarView::render");

			var compiledTemplate = _.template(htmlTemplate, {});
			this.$el.html(compiledTemplate);




		},




	});



	// Our module now returns our view
	return ToolbarView;



});