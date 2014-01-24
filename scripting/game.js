define(["jquery", "jquery-scrolly", "jquery-ui-touch-punch"], function ($) {
    //Do setup work her
    var init = function() {
      $("#div_main").show();
      $('.parallax').scrolly({bgParallax: true});
      $( "#draggable" ).draggable().droppable({
			drop: function( event, ui ) {
				$('#draggable').css({'border': '5px solid green'});
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
