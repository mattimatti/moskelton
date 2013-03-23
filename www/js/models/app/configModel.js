/*jslint regexp: true */
/*global require,define,  
 */
define([

	'jquery',
	'underscore',
	'backbone'], function($, _, Backbone) {


	// parses and holds the xml configuration file
	// IN the config we'll have the paths of the repo.
	var ConfigModel = Backbone.Model.extend({


		url: "config.xml",



		// Parse the nodes into Model
		parse: function(data) {

			var parsed = {};

			parsed = $.extend(parsed, $(data).find("config").data());

			
			$(data).find('key').each(function(index) {

				var name= $(this).attr('name');
				var value= $(this).text();

				parsed[name] =  value;

			});

			return parsed;

		},



		// Fetch the xml file
		fetch: function(options) {

			console.log("ConfigModel:fetch");

			options = options || {};
			options.dataType = "xml";


			Backbone.Model.prototype.fetch.call(this, options);

		}



	});



	return ConfigModel;

});