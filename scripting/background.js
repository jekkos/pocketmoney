define(["jquery"], function ($) {
    //Do setup work her
    var init = function() {
      $('.parallax').scrolly({bgParallax: true});
    };

    return {
      init : init
    };
    
});
