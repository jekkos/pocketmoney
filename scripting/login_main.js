define(["jquery"], function($) {

	var init = function(callback) {
		var $widget = $('#div_login');
		var $placeHolder = $('#login_placeholder');
		
		addButtons = function(amount) {
			for(var i = 1; i <= amount; i++) {
				$placeHolder.append('<div class="button" id="button-'+i+'"></div>');
				var $button = $('#button-'+i);
				$button.css("background-image","url('media/images/login/owl-"+i+".png')");
			}
		};
		
		addButtons(9);
		
		$widget.show();
		
		// TODO execute callback on login succe
	};
	
	return {
		init : init
	};

});