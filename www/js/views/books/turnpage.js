/*jslint regexp: true */
/*global require,define,  
 */

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/books/turnpage.html',
	'turn', 'turn_zoom'], function($, _, Backbone, htmlTemplate) {



	// A BOOK VISUALIZATION
	//---------------------
	var TurnPageView = Backbone.View.extend({



		el: this.$('#book'),



		events: {
			'keyup': this.logKey,
			'keypress': this.logKey,
			'click .sensor': this.onSensibleAreaClick
		},





		// init the view
		initialize: function(options) {

			this.vent = options.vent;

			console.log("TurnPageView::initialize");

			console.log(this.model);

			this.vent.on("Thumb:click", this.goToPage, this);

			this.model.on("add render change", _.debounce(this.render, 0), this);

			this.vent.on("resize", this.resize, this);

			//this.collection.on("add render change",this.render,this);

		},



		// Render the pages of the book.
		render: function() {

			console.log("TurnPageView::render");
			

			var compiledTemplate = _.template(htmlTemplate, {
				pages: this.model.pages.models, book:this.model
			});

			this.$el.html(compiledTemplate);

			this.splash = $(".splash");


			console.log("model",this.model);

			this.setupBook();

			//this.setupMouseWheel();

			//this.setupZoom();

			this.setupSensibleAreas();

		},


		// Removing the view
		remove: function() {
			$(window).unbind("resize.app");
		},


		resize: function(e){

			//console.log("TurnPageView:resize",e);
			var width = $(e.currentTarget).width();
			var height = $(e.currentTarget).height();

			//console.log(width,height);

			width = this.model.get("width");
			height = this.model.get("height");

			this.resizeBook(width,height);

			

		},



		// Resizes the book
		resizeBook :function(width,height){
			this.getBook().turn("size",width,height);

		},


		// setup the sensible areas
		setupSensibleAreas : function(){
			$(".sensor").click(this.onSensibleAreaClick);
		},




		onSensibleAreaClick: function(e) {
			console.log("onSensibleAreaClick");

			console.log($(e.currentTarget).data());

			//this.vent.trigger();
		},


		logKey: function(e) {
			console.log(e.type, e.keyCode);
		},




		//### Setup a turn.js book;
		setupBook: function() {

			var self = this;

			this.$el.turn({
				display: 'double',
				acceleration: $.isTouch,
				autoCenter: false,
				duration: 1000,
				gradients: !$.isTouch,
				elevation: 50,
				width: this.model.get('width'),
				height: this.model.get('height')/2,
				page: 1,
				when: {

					turning: function(e, page, view) {

						var book = $(this),

							currentPage = book.turn('page'),
							pages = book.turn('pages');

						console.log("At page", page, pages);

						//self.setupSensibleAreas();

						//if (page == 1) $('.previous-button').hide();
						//else $('.previous-button').show();


						//if (page == pages) $('.next-button').hide();
						//else $('.next-button').show();

					},


					turned: function(e, page, view) {
						self.trigger("Page::turned", e, page);
					},


					start: function(e, pageObj) {



					},

					end: function(e, pageObj) {

						var book = $(this);

						//setTimeout(function() {
						//	$('#slider').slider('value', getViewNumber(book));
						//}, 1);


					},

					missing: function(e, pages) {
						console.log("Missing page");

					},


					zooming: function(event, newFactor, current) {
						//console.log("zooming", arguments);
					}



				}
			});



		},



		setupMouseWheel: function() {

			/*
				$('#book-zoom').mousewheel(function(event, delta, deltaX, deltaY) {

				    if (!currentDemo)
				      return;

				    event.preventDefault();

				    var flipbook = samples[currentDemo].flipbook;

				    if (flipbook.turn('zoom')!=1)
				      return;

				    var step = 30,
				      actualPos = $( "#slider" ).slider('value')*step;

				    if (scrollX===null) {
				      scrollX = actualPos;
				      scrollPage = flipbook.turn('page');
				    }

				    scrollX = Math.min($( "#slider" ).slider('option', 'max')*step,
				      Math.max(0, scrollX + deltaX));

				    var actualView = Math.round(scrollX/step),
				      page = Math.min(flipbook.turn('pages'), Math.max(1, actualView*2 - 2));

				    if ($.inArray(scrollPage, flipbook.turn('view', page))==-1) {
				      scrollPage = page;
				      flipbook.turn('page', page);
				    }

				    if (scrollTimer)
				      clearInterval(scrollTimer);

				    scrollTimer = setTimeout(function(){
				      scrollX = null;
				      scrollPage = null;
				    }, 1000);

				  });

				*/


		},



		setupZoom: function() {

			var self = this;

			$('.splash').zoom({

				flipbook: this.getBook(),

				max: function() {

					return 2;

				},

				when: {

					resize: function(event, scale, page, pageElement) {

						console.log("zoom:resize", page);

						if (scale === 1) {
							self.loadSmallPage(page , pageElement);
						} else {
							self.loadBigPage(page , pageElement);
						}

					},

					change: function(event, scale) {

						//console.log("zoom:change", scale, event);
						if (scale === 1) {

							//console.log(scale);
							//$('.splash').addClass('no-transition').height('');
							//$('body > :not(.splash)').show();
							//$('.bar').css({visibility:'visible'});
							//$('#slider-bar').css({visibility:'visible'});
							//bookshelf.zoomOutButton(false);

						} else {
							//console.log(scale);
							//$('.magazine1').removeClass('animated').addClass('zoom-in');
							//$('.splash').addClass('no-transition').height($(window).height());
							//$('body > :not(.splash)').hide();

						}

					},

					zoomIn: function() {

						console.log("zoom:zoomIn");
						//$('.bar').css({visibility:'hidden'});
						//$('#slider-bar').css({visibility:'hidden'});
						//bookshelf.zoomOutButton(true);

					},

					zoomOut: function() {
						console.log("zoom:zoomOut");
						//setTimeout(function(){
						//	$('.magazine1').addClass('animated').removeClass('zoom-in');
						//}, 0);
	
					},

					swipeLeft: function() {

						self.goNext();

					},

					swipeRight: function() {

						self.goPrevious();

					}
				}
			});


			// attach event to splash div.


			if ($.isTouch) {
				$('.splash').bind('zoom.doubleTap', $.proxy(this.zoomTo, this));
			} else {
				$('.splash').bind('zoom.tap', $.proxy(this.zoomTo, this));
			}




		},



		// When user zoomed in replace the zoomed image for a better resolution.
		loadBigPage: function(page, pageElement) {

			page = page -1;

			console.log("loadBigPage", page);
			var img = $('<img />');

			img.load(function() {

				var prevImg = pageElement.find('img');
				$(this).css({
					width: '100%',
					height: '100%'
				});
				$(this).appendTo(pageElement);
				prevImg.remove();

			});

			img.attr('src', 'data/large/' + page + '.png');
		},



		// When user zooms out 
		loadSmallPage: function(page, pageElement) {

			page = page -1;

			console.log("loadSmallPage", page);

			var img = pageElement.find('img');

			img.css({
				width: '100%',
				height: '100%'
			});

			img.unbind('load');

			img.attr('src', 'data/tablet/' + page + '.png');
		},



		zoomTo: function(event) {

			var me = this;
			//console.log("zoomTo", me);
			if (this.splash.zoom('value') === 1) {
				this.splash.zoom('zoomIn', event);
			} else {
				this.splash.zoom('zoomOut');
			}

		},


		// return the zoom.
		getZoom: function() {
			return this.getBook().turn('zoom');
		},


		// return the pages.
		getPages: function() {
			return this.getBook().turn('pages');
		},



		// return the current page.
		getPage: function() {
			return this.getBook().turn('page');
		},



		// return reference of the book
		getBook: function() {
			return this.$el;
		},



		goToPage: function(pageIndex) {
			this.getBook().turn('page', pageIndex);

		},



		goPrevious: function() {


			this.getBook().turn('previous');

		},



		goNext: function() {


			this.getBook().turn('next');

		}



	});



	// Our module now returns our view
	return TurnPageView;



});