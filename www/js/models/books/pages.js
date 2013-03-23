define([
        'underscore',
        'backbone'
      ], function(_, Backbone){
        
      
      	
      	var PageModel = Backbone.Model.extend({
		    defaults: {
		      name: "Mypage"
		    }
		  });
		  
		  
		  
		  // Return the model for the module
		  return PageModel;
        
        
});

