/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'app',
	
	'models/app/booksIndexModel',
	'models/app/catalogIndexModel',

	
	'text!templates/dashboard/chrome.html'
	]

	, function($, _, Backbone, App, BooksIndexModel, CatalogIndexModel, mainTemplate, window) {


	var ChromeView = Backbone.View.extend({

		el: $('#app'),


		// initialize
		initialize: function(options) {
			console.log("ChromeView::initialize");
		},






		// Load the repo configuration files
		loadIndexes: function() {

			console.log("ChromeView::loadIndexes");

			// Load the books index.
			this.booksModel = new BooksIndexModel({
				url: this.config.get('booksIndex')
			});

			this.booksModel.on("add fetch reset change", this.renderBooks, this);
			this.booksModel.fetch();


			// Load Catalog Index
			this.catalogModel = new CatalogIndexModel({
				url: this.config.get('catalogIndex')
			});

			this.catalogModel.on("add fetch reset change", this.renderCatalog, this);

			this.catalogModel.fetch();


		},



		// Render
		render: function() {

			console.log("ChromeView::render");

			// bind to window resize.
			$(window).bind("resize.app", _.bind(this.resize, this));


			var compiledTemplate = _.template(mainTemplate, {});
			this.$el.html(mainTemplate);


			/*
			this.renderDashboard();
			this.renderCatalog();
			this.renderBooks();
			*/


		},



		renderDashboard: function() {
			console.log("ChromeView::renderDashboard");

			this.dashboard = new DashBoardView({
				el: "#dashboard"
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



	return ChromeView;

});