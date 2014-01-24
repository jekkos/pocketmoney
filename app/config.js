require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    "components": "../bower_components",
    "jquery": "../bower_components/jquery/jquery",
    "jquery-ui" : "../bower_components/jquery-ui/ui/jquery-ui",
    "jquery-ui-touch-punch" : "../bower_components/jquery-ui-touch-punch-improved/jquery.ui.touch-punch-improved",
    "game" : "../scripting/game",
    "jquery-scrolly" : "../scripting/jquery.scrolly",
    "login" : "../scripting/login_main",
	"loginservice" : "../scripting/login_sevice"
  },
  shim: {
	    'jquery-scrolly': {
	        deps: [ 'jquery' ]
	    },
	    "jquery-ui" : {
	    	deps : [ 'jquery' ]
	    },
	    "jquery-ui-touch-punch" : {
	    	deps : [ 'jquery-ui' ]
	    }
	}
});

if (!window.requireTestMode) {
  require(['main'], function() {
	  
  });
}





