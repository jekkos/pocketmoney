define(["jquery"], function ($) {
    //Do setup work her
    var init = function() {
    	var $section = $("section").attr("id", "story-freext");
    	$section.append("div").addClass("parallax").attr("data-velocity", "-.2");
    	$section.append("div").addClass("parallax").attr("data-velocity", "-.5");
    };

    return {
      init : init
    };
});
