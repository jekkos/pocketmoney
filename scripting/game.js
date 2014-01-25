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
          
    	  stage.addEventListener("stagemousedown", function(event) {
    		  console.log(event, event.rawX, event.rawY);
			  
    		  newOwl.fly(event.rawX, event.rawY);
    	  });
    	  
    	  var pointIsTree = function(point) {	  
    		  var red = point.data[0];
    		  var blue = point.data[1];
    		  var green = point.data[2];
    		  var alpha = point.data[3];
    		  return (198==red && 156 == blue && 109 ==green);
    	  };
    	  
    	  var isOwlOnTree = function() {
    		  var ctx = canvas.getContext('2d');
    		  var x1 = newOwl.x + newOwl.getBounds().width / 2;
    		  var y1 = newOwl.y + newOwl.getBounds().height;
    		  var result = pointIsTree(ctx.getImageData(x1, y1, 1, 1));			
    		  return result;
    	  };

          createjs.Ticker.timingMode = createjs.Ticker.RAF;
          createjs.Ticker.addEventListener("tick", function(event) {
              if (newOwl.isFlying() && isOwlOnTree()) { 
      			//newOwl.sleep();  
      		  }
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
