define(["jquery"], function($) {

	var init = function(callback) {
		var loginCode = [5,9,4,1,3,6];
		var stappen = ["eerste","tweede","derde","vierde","vijfde","zesde"];
		var counter = 1;
		var $widget = $('#div_login');
		var $placeHolder = $('#login_placeholder');
		var loginIsCorrect = true;

		notify = function() {
  			var selectedNumber = $(this).attr('id').substring(7,8);
  			var $selectedButton = $('#selectedButton-'+counter);
  			$selectedButton.css("background-image","url('media/images/login/owl-"+selectedNumber+".png')");
  			counter++;
        	setCorrectSequence(selectedNumber);
		}
		
		addButtons = function(amount) {
			for(var i = 1; i <= amount; i++) {
				$placeHolder.append('<div class="button" id="button-'+i+'"></div>');
				var $button = $('#button-'+i);
				$button.css("background-image","url('media/images/login/owl-"+i+".png')");
				$button.on( "click touchstart", notify );
			}
		};

		reset = function(status) {
			counter = 1;
			loginIsCorrect = true;
			$('#login_stap').html("Login "+status+" - Kies je eerste figuur");
			for(var i = 1; i <= 6; i++) {
				var $button = $('#selectedButton-'+i);
				$button.css('background-image', 'none');
			}
		}

		setCorrectSequence = function(selectedNumber){
			if(counter-1 === 6) { //check if login is still correct
				if(loginIsCorrect) {
					callback();
				}
				else {
					reset('fout');
				}
			}
			else {
				if(loginIsCorrect && selectedNumber != loginCode[counter-2])
					loginIsCorrect = false;
				$('#login_stap').html("Kies je "+stappen[counter-1]+" figuur");
			}
		}
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
