/*jslint regexp: true */
/*global require,define,window,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	
	'models/app/booksIndexModel',
	'models/app/catalogIndexModel',

	
	'text!templates/app/chrome.html',

	'i18n!nls/app'

	]

	, function($, _, Backbone, BooksIndexModel, CatalogIndexModel, mainTemplate, strings) {


	var Layout = Backbone.View.extend({

		el: $('#app'),


		// initialize
		initialize: function(options) {
			console.log("ChromeView::initialize");
			console.log("navigator.language: ",window.navigator.language);
			console.log("navigator.language: ",window.navigator.userLanguage);

			console.log("LANGUAGE: ",strings.ciao);
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



	return Layout;

});