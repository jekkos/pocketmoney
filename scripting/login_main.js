define(["jquery"], function($) {

	var init = function(callback) {
		var $widget = $('#div_login');
		var $placeHolder = $('#login_placeholder');
		
		addButtons = function(amount) {
			for(var i = 1; i <= amount; i++) {
				$placeHolder.append('<div class="button" id="button-'+i+'"></div>');
				var $button = $('#button-'+i);
				$button.css("background-image","url('media/images/login/owl-"+i+".png')");
				$button.click(callback);
			}
		};
		
		addButtons(9);
		
	};
	
	var hide = function() {
		$("#div_login").hide();
	};
	
	return {
		init : init,
		hide : hide
	};

});