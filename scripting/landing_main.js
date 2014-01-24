define(["jquery"], function($) {

	var init = function() {
		$('a#next_link').click(function() {
			$('div.screen').hide();
			$('div#div_login').show();
		});
	};
	
	return {
		init : init
	};
	
});