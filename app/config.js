require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    "components": "../bower_components",
    "jquery": "../bower_components/jquery/jquery",
    "background" : "../scripting/background",
    "login" : "../scripting/login_main",
    "scrolly" : "../scripting/jquery.scrolly"
  }
});

if (!window.requireTestMode) {
  require(['jquery', 'login', 'background'], function(main, login, $, background){
	  
  });
}





