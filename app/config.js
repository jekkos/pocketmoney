require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    "components": "../bower_components",
    "jquery": "../bower_components/jquery/jquery",
    "login" : "../scripting/login_main"
  }
});

if (!window.requireTestMode) {
  require(['main', 'jquery', 'login'], function(){ });
}





