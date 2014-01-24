require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    "components": "../bower_components",
    "jquery": "../bower_components/jquery/jquery",
    "login" : "../scripting/login_main"
	"landing" : "../scripting/landing_main"
  }
});

if (!window.requireTestMode) {
  require(['main', 'jquery', 'landing', 'login'], function(){ });
}





