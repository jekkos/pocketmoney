define(["jquery", "scrolly"], function ($) {
	$("#div_main").hide();
    //Do setup work her
    var init = function() {
      $('.parallax').scrolly({bgParallax: true});
    };

    return {
      init : init
    };
    
});
