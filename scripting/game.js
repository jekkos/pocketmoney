define(["jquery", "createjs", "jquery-scrolly", "jquery-ui-touch-punch"], function ($, createjs) {
    //Do setup work her
    var init = function() {
    	
    	console.log(createjs);
      $("#div_main").show();
	  
      //find canvas and load images, wait for last image to load
      var canvas = document.getElementById("testCanvas");

      // create a new stage and point it at our canvas:
      var stage = new createjs.Stage(canvas);      

//      // enable touch interactions if supported on the current device:
//      createjs.Touch.enable(stage);
//
//      // enabled mouse over / out events
//      stage.enableMouseOver(10);
//      stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas      
      
      //wait for the image to load
      var imgTree = new Image();
      imgTree.onload = handleImageLoad;
      imgTree.src = "media/images/game/BG_tree.png";    

      //wait for the image to load
      var imgOwl, imgEx;    

      var update = false;
      
      function handleImageLoad (event) {
    	  var bg = new createjs.Bitmap(event.target);
          stage.addChild(bg);               
          stage.update();
          
          imgOwl = new Image();
          imgOwl.onload = handleOwlLoad;
          imgOwl.src = "media/images/game/Character_Owl_2.png";    
          
          imgEx = new Image();
          imgEx.onload = handleExample;
          imgEx.src = "media/images/game/runningGrant.png"; 
      }
      
      
      
      function handleExample() {
    	  
          var data = new createjs.SpriteSheet({
              "images": [imgEx],
              "frames": {"regX": 0, "height": 292, "count": 64, "regY": 0, "width": 165},
              // define two animations, run (loops, 1.5x speed) and jump (returns to run):
              "animations": {"run": [0, 25, "run", 1.5], "jump": [26, 63, "run"]}
	      });
	      var grant = new createjs.Sprite(data, "run");
	      grant.setTransform(100, 90, 0.8, 0.8);
	      grant.framerate = 30;
	      stage.addChild(grant);
	      
	      
        // using "on" binds the listener to the scope of the currentTarget by default
        // in this case that means it executes in the scope of the button.
        grant.on("mousedown", function(evt) {
      	  		console.log('mousedown');
                this.parent.addChild(this);
                this.offset = {x:this.x-evt.stageX, y:this.y-evt.stageY};				
        });
        
        // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
        grant.on("pressmove", function(evt) {
                this.x = evt.stageX+ this.offset.x;
                this.y = evt.stageY+ this.offset.y;
                // indicate that the stage should be updated on the next tick:
				var ctx = canvas.getContext('2d');
				var x = this.x + imgOwl.width / 2;
				var y = this.y + imgOwl.height;
				
				if (checkSnapPoint(ctx.getImageData(x, y, 1, 1))) {
					
					
				}					
                update = true;
        });
        
        grant.on("rollover", function(evt) {
                this.scaleX = this.scaleY = this.scale*1.2;
                update = true;
        });
        
        grant.on("rollout", function(evt) {
                this.scaleX = this.scaleY = this.scale;
                update = true;
        });  	      
	      stage.update();
      }
	  
	  function checkSnapPoint(point) {
			var red = point.data[0];
			var blue = point.data[1];
			var green = point.data[2];
			var alpha = point.data[3];
			return (198==red && 156 == blue && 109 ==green);
	  }
      
      function handleOwlLoad() {
    	  
          var data = new createjs.SpriteSheet({
	              "images": [imgOwl],
	              "frames": {"regX": 0, "height": 100, "count": 3, "regY": 0, "width": 100},
	              // define two animations, run (loops, 1.5x speed) and jump (returns to run):
	              "animations": {"run": [0, 2, "run", 1.5]}
	      });
	      var grant = new createjs.Sprite(data, "run");
          //grant.setTransform(-200, 90, 0.8, 0.8);
          grant.framerate = 30;  	  
    	  
	      //stage.addChild(grant);
	      stage.update();
//	      
	      
	      //stage.addEventListener("stagemousedown", handleJumpStart);
	      
//    	  var bitmap = new createjs.Bitmap(imgOwl);
//          stage.addChild(bitmap);               
//          bitmap.cursor = "pointer";
//          
//          // using "on" binds the listener to the scope of the currentTarget by default
//          // in this case that means it executes in the scope of the button.
//          bitmap.on("mousedown", function(evt) {
//        	  		console.log('mousedown');
//                  this.parent.addChild(this);
//                  this.offset = {x:this.x-evt.stageX, y:this.y-evt.stageY};
//          });
//          
//          // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
//          bitmap.on("pressmove", function(evt) {
//                  this.x = evt.stageX+ this.offset.x;
//                  this.y = evt.stageY+ this.offset.y;
//                  // indicate that the stage should be updated on the next tick:
//                  update = true;
//          });
//          
//          bitmap.on("rollover", function(evt) {
//                  this.scaleX = this.scaleY = this.scale*1.2;
//                  update = true;
//          });
//          
//          bitmap.on("rollout", function(evt) {
//                  this.scaleX = this.scaleY = this.scale;
//                  update = true;
//          });          
          
	      createjs.Ticker.timingMode = createjs.Ticker.RAF;
          createjs.Ticker.addEventListener("tick", tick);
          stage.update();
      }
      
      function tick(event) {
          // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
          if (update) {
        	  		console.log('tick');
                  update = false; // only update once
                  stage.update(event);
          }
          stage.update(event);
      }      
      
      $('.parallax').scrolly({bgParallax: true});
	  
//	  var level = 1, isFlying = false;
//	  
//		$( "#draggable" ).draggable({
//			drag: function( event, ui ) {
//				var top = $('#draggable').css('top').replace('px', '');
//				
//				if (level === 1 && top < 100 ) {
//					console.log('fall');
//					$('body').focus();
//					$('#draggable').animate({top: '500px'}, 100);
//				} 
//
//			},
//			start : function() {
//				console.log('draggable start');
//				isFlying = true;
//				function fly () {
//					if ($('#draggable img').attr('src') === 'media/images/game/Character_Owl_2_fly1.png') {
//						$('#draggable img').attr('src', 'media/images/game/Character_Owl_2_fly2.png');
//					} else {
//						$('#draggable img').attr('src', 'media/images/game/Character_Owl_2_fly1.png');
//					}
//
//					if (isFlying) {
//						setTimeout(function(){
//							fly();
//						}, 30);
//					} else {
//						console.log("stop flying");
//					}
//				}
//				fly();
//			},
//			stop : function() {
//				console.log('draggable stop');
//				isFlying = false;
//				$('#draggable img').attr('src', 'media/images/game/Character_Owl_2.png');
//			}
//		});
//		
//		$( "#droppable" ).droppable({
//				drop: function( event, ui ) {
//					//$('#draggable').css({'border': '5px solid green'});
//					
//					// Sleep
//					setTimeout(function(){
//						$('#draggable img').attr('src', 'media/images/game/Character_Owl_2_eye1.png');
//						setTimeout(function(){
//							$('#draggable img').attr('src', 'media/images/game/Character_Owl_2_eye2.png');
//						}, 100);
//					}, 30);
//					
//				},
//				out: function (event, ui) {
//					$('#draggable').css({'border': ''});
//				}
//			});
    };

    return {
      init : init
    };
    
});
