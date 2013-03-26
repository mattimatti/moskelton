/*jslint regexp: true */
/*global require,define,  
 */
define([

'jquery',
'underscore',
'backbone',
'text!templates/catalog/menu.html'
], function($, _, Backbone,htmlTemplate) {


	var MenuView = Backbone.View.extend({



		initialize :function(){

			console.log("MenuView:initialize");


		},




		render: function(){

			console.log("MenuView:render");

			// Render the template
			var compiledTemplate = _.template(htmlTemplate, {});
			this.$el.html(compiledTemplate);


			
		}






	});





	return MenuView;
	
});