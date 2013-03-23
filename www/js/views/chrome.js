/*jslint regexp: true */
/*global require,define,  
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'app',
	'models/app/configModel',
	'models/app/booksIndexModel',
	'models/app/catalogIndexModel',
	'text!templates/chrome.html'], function($, _, Backbone, App, ConfigModel, BooksIndexModel, CatalogIndexModel, mainTemplate, window) {


	var ChromeView = Backbone.View.extend({

		el: $('#app'),


		// initialize
		initialize: function(options) {
			console.log("ChromeView::initialize");


			// load the cofig file.
			// no matters if they say should be loadde in page.
			this.config = new ConfigModel();
			this.config.on("add fetch reset change",this.loadIndexes,this);
			this.config.fetch();


		},




		// load the repo configuration files
		loadIndexes: function(){


			console.log("loadIndexes");

			// check if the config file loaded.
			console.log(this.config);
			console.log(this.config.get('booksIndex'));
			console.log(this.config.get('catalogIndex'));
			//console.log(this.config.attributes);


			// Load the books index.
			this.booksModel = new BooksIndexModel({
				url: this.config.get('booksIndex')
			});
			this.booksModel.fetch();



			// Load Catalog Index
			this.catalogModel = new CatalogIndexModel({
				url: this.config.get('catalogIndex')
			});
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



		renderBook: function() {



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