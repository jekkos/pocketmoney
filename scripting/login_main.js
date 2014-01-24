define(["jquery"], function($) {

	var init = function(callback) {
		var $widget = $('#div_login');
		
		addButtons = function(amount) {
			for(var i = 0; i < amount; i++)
				$widget.append('<div class="button"></div>');
		};
		
		addButtons(9);
		
		$widget.show();
		
		// TODO execute callback on login succe
		callback();
	};
	
	return {
		init : init
	};

});