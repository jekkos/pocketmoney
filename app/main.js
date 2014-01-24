// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["jquery", "background", "login"], function($, background, login) {
	$("section").hide();
	login.start(function() {
		  background.init();
	      $('.parallax').scrolly({bgParallax: true});
    });
	
});
