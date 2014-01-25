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
      var imgOwl;    

      var update = false;
      
      function handleImageLoad (event) {
    	  var bg = new createjs.Bitmap(event.target);
          stage.addChild(bg);               
          stage.update();
          
          imgOwl = new Image();
          imgOwl.onload = handleOwlLoad;
          imgOwl.src = "media/images/game/Character_Owl_2.png";             
      }
      
      function handleOwlLoad() {
    	  
    	  var bitmap = new createjs.Bitmap(imgOwl);
          stage.addChild(bitmap);               
          bitmap.cursor = "pointer";
          
          // using "on" binds the listener to the scope of the currentTarget by default
          // in this case that means it executes in the scope of the button.
          bitmap.on("mousedown", function(evt) {
        	  		console.log('mousedown');
                  this.parent.addChild(this);
                  this.offset = {x:this.x-evt.stageX, y:this.y-evt.stageY};
          });
          
          // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
          bitmap.on("pressmove", function(evt) {
                  this.x = evt.stageX+ this.offset.x;
                  this.y = evt.stageY+ this.offset.y;
                  // indicate that the stage should be updated on the next tick:
                  update = true;
          });
          
          bitmap.on("rollover", function(evt) {
                  this.scaleX = this.scaleY = this.scale*1.2;
                  update = true;
          });
          
          bitmap.on("rollout", function(evt) {
                  this.scaleX = this.scaleY = this.scale;
                  update = true;
          });          
          
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
