// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["game", "login", "statusbar"], function(game, login, statusbar) {
	
	login.init(function(event) {
		  login.hide();
		  game.init();
		  statusbar.init();
    });
	
});
