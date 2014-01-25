define(["jquery", "createjs", "owl", "acorn", "statusbar", "jquery-scrolly", "jquery-ui-touch-punch"], function ($, createjs, owl, acorn, statusbar) {
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
    	  
    	  var checkIntersection = function(object1,object2) {
    		  if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
      			    object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
      			// The objects are touching
    			  return true;
      			}
    		  return false;
    	  };

    	  var tree = new createjs.Bitmap(event.target);
          stage.addChild(tree);               
          
          var newOwl = owl.create();
          stage.addChild(newOwl);
          
          var newAcorn = acorn.create();
          stage.addChild(newAcorn);
          
    	  stage.addEventListener("stagemousedown", function(event) {
    		  console.log(event, event.rawX, event.rawY);
    		  //newOwl.fly(event.rawX, event.rawY);
			  newOwl.setFireDown(event.rawX, event.rawY);
    	  });
    	  
		   stage.addEventListener("stagemouseup", function(event) {
    		  console.log(event, event.rawX, event.rawY);
    		  //newOwl.fly(event.rawX, event.rawY);
			  newOwl.setFireUp(event.rawX, event.rawY);
    	  });	
		  
    	  var pointIsOnTree = function(point) {	  
    		  var red = point.data[0];
    		  var blue = point.data[1];
    		  var green = point.data[2];
    		  var alpha = point.data[3];
    		  return (198==red && 156 == blue && 109 ==green);
    	  };
		  

    	  var isOwlOnBranche = function() {
    		  var ctx = canvas.getContext('2d');
    		  var aboveCoords = newOwl.getAboveHeadCoordinates();
			  var belowCoords = newOwl.getBelowFeetCoordinates();
			  var aboveOnTree = pointIsOnTree(ctx.getImageData(aboveCoords.x, aboveCoords.y, 1, 1));
			  var belowOnTree = pointIsOnTree(ctx.getImageData(belowCoords.x, belowCoords.y, 1, 1));
    		  return !aboveOnTree && belowOnTree;
    	  };	 
		  

          createjs.Ticker.timingMode = createjs.Ticker.RAF;
          createjs.Ticker.addEventListener("tick", function(event) {
              // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
              if (newOwl.isFlying() && isOwlOnBranche()) { 
      			newOwl.sleep();  
      		  }
        	  newOwl.update();
        	  stage.update(event);
              // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
              
              if (newAcorn.isVisible() && 
            		  newOwl.isFlying() && 
            		  checkIntersection(newOwl.getTransformedBounds(), newAcorn.getTransformedBounds())) {
            	  console.log("collision detected!!!");
            	  statusbar.incrementAcorns();
            	  newAcorn.visible = false;
              }
          });
      };
      imgTree.src = "media/images/game/BG_tree.png";    
      $('.parallax').scrolly({bgParallax: true});
    };

    return {
      init : init
    };
    
});
