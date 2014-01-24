define(["jquery"], function($) {

	var init = function(callback) {
		var $widget = $('#div_login');
		
		addButtons = function(amount) {
			for(var i = 0; i < amount; i++)
				$widget.append('<div class="button"></div>');
		};
		
		addButtons(9);
		
		// TODO execute callback on login succeed
	};
	
	return {
		init : init
	};

});