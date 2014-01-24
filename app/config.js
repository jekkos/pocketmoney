require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    "components": "../bower_components",
    "jquery": "../bower_components/jquery/jquery",
    "background" : "../scripting/background",
    "scrolly" : "../scripting/jquery.scrolly",
    "login" : "../scripting/login_main",
  }
});

if (!window.requireTestMode) {
  require(['main'], function() {
	  
  });
}





