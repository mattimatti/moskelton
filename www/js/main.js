// Configure require packages
require.config({


	paths: {
		jquery: 'libs/jquery/jquery.min',
		underscore: 'libs/underscore/underscore.min',
		backbone: 'libs/backbone/backbone.min',
		turn: 'libs/turn/turn.min',
		turn_zoom: 'libs/turn/zoom.min',
		jcarousel: 'libs/jcarousel/jquery.jcarousel.min',
	},



	shim: {

		'turn': ['jquery'],

		'turn_zoom': ['jquery','turn'],

		'jcarousel': ['jquery'],

		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}
});


// Load our app module and pass it to our definition function
require([

'app', ], function(App) {

	// The "app" dependency is passed in as "App"
	App.initialize();

});