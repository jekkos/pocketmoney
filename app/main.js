// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["game", "login"], function(game, login) {
	login.init(function(event) {
		  login.hide();
		  game.init();
    });
	
});
