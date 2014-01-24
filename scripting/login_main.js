define(["jquery"], function($) {

	$( document ).ready(function() {
		var $widget = $('#div_login');
	
		addButtons = function(amount) {
			for(var i = 0; i < amount; i++)
				$widget.append('<div class="button"></div>');
		};
	
		addButtons(9);
	});

});