// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["background", "login"], function(background, login) {
	login.init(function(event) {
		  login.hide();
		  background.init();
    });
	
});
