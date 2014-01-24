define(["jquery", "jquery-scrolly", "jquery-ui-touch-punch"], function ($) {
    //Do setup work her
    var init = function() {
      $("#div_main").show();
	  
      $('.parallax').scrolly({bgParallax: true});
	  
	  var level = 1, isFlying = false;
	  
		$( "#draggable" ).draggable({
			drag: function( event, ui ) {
				var top = $('#draggable').css('top').replace('px', '');
				
				if (level === 1 && top < 100 ) {
					console.log('fall');
					$('body').focus();
					$('#draggable').animate({top: '500px'}, 100);
				} 

			},
			start : function() {
				console.log('draggable start');
				isFlying = true;
				function fly () {
					if ($('#draggable img').attr('src') === 'media/images/game/Character_Owl_2_fly1.png') {
						$('#draggable img').attr('src', 'media/images/game/Character_Owl_2_fly2.png');
					} else {
						$('#draggable img').attr('src', 'media/images/game/Character_Owl_2_fly1.png');
					}

					if (isFlying) {
						setTimeout(function(){
							fly();
						}, 30);
					} else {
						console.log("stop flying");
					}
				}
				fly();
			},
			stop : function() {
				console.log('draggable stop');
				isFlying = false;
				$('#draggable img').attr('src', 'media/images/game/Character_Owl_2.png');
			}
		});
		
		$( "#droppable" ).droppable({
				drop: function( event, ui ) {
					//$('#draggable').css({'border': '5px solid green'});
					
					// Sleep
					setTimeout(function(){
						$('#draggable img').attr('src', 'media/images/game/Character_Owl_2_eye1.png');
						setTimeout(function(){
							$('#draggable img').attr('src', 'media/images/game/Character_Owl_2_eye2.png');
						}, 100);
					}, 30);
					
				},
				out: function (event, ui) {
					$('#draggable').css({'border': ''});
				}
			});
    };

    return {
      init : init
    };
    
});
