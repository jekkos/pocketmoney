define(["jquery", "userservice"], function($, userservice) {

	var init = function(callback) {
		var stappen = ["eerste","tweede","derde","vierde","vijfde","zesde"];
		var $widget = $('#div_login');
		var $placeHolder = $('#login_placeholder');
		var isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
		var myUp = isIOS ? "touchend" : "mouseup";
		var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'media/sounds/login_click.mp3');
		var code = '';

		notify = function() {
			audioElement.play();
  			var selectedNumber = $(this).attr('id').substring(7,8);
  			var $selectedButton = $('#selectedButton-'+(code.length + 1));
  			$selectedButton.css("background-image","url('media/images/login/owl-"+selectedNumber+".png')");
			code += ('' + selectedNumber);
			
			updateStepCaption();			
			if (code.length == 6) {
				var user = userservice.getUserByCode(code);
				if (undefined != user) {
					localStorage.setItem('user_name', user.name);
					$('#login_stap').html('Code correct, ingelogd!');
					setTimeout(function() { 
						$('#div_login').hide();
						$('#div_main').show();
					}, 2000);
				} else {
					reset('Foute code');
				}			
			}			
			
		}
		
		addButtons = function(amount) {
			for(var i = 1; i <= amount; i++) {
				$placeHolder.append('<div class="button" id="button-'+i+'"></div>');
				var $button = $('#button-'+i);
				$button.css("background-image","url('media/images/login/owl-"+i+".png')");
				$button.on( myUp, notify );
			}
		};

		reset = function(status) {
			$('#login_stap').html(status+" - Kies je eerste figuur");
			for(var i = 1; i <= 6; i++) {
				var $button = $('#selectedButton-'+i);
				$button.css('background-image', 'none');
			}
			code = '';
		}
		
		updateStepCaption = function() {
			$('#login_stap').html("Kies je "+stappen[code.length]+" figuur");
		}
		
		updateStepCaption();
		addButtons(9);
		$widget.show();
	};
	
	
	var hide = function() {
		$("#div_login").hide();
	};
	
	return {
		init : init,
		hide : hide
	};

});
