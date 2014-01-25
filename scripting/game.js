define(["jquery", "createjs", "owl", "jquery-scrolly", "jquery-ui-touch-punch"], function ($, createjs, owl) {
    //Do setup work her
    var init = function() {
    	
      $("#div_main").show();
	  
      //find canvas and load images, wait for last image to load
      var canvas = document.getElementById("testCanvas");

      // create a new stage and point it at our canvas:
      var stage = new createjs.Stage(canvas);      

      //wait for the image to load
      var imgTree = new Image();
      imgTree.onload = function(event) {
    	  var tree = new createjs.Bitmap(event.target);
          stage.addChild(tree);               
          
          var newOwl = owl.create();
          stage.addChild(newOwl);
          
    	  stage.addEventListener("stagemousedown", function() {
    		  newOwl.sleep();
    	  });

          createjs.Ticker.timingMode = createjs.Ticker.RAF;
          createjs.Ticker.addEventListener("tick", function(event) {
        	  newOwl.update();
              // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
              stage.update(event);
          });
      };
      imgTree.src = "media/images/game/BG_tree.png";    
      $('.parallax').scrolly({bgParallax: true});
    };

    return {
      init : init
    };
    
});
