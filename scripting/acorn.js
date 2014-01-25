
define(['createjs'], function(createjs) {
	
	var img = new Image();
	img.src = "media/images/game/spinner2.png"; 
	
	var create = function() {
		var data = new createjs.SpriteSheet({
			"images": [img],
			"frames": {"regX": 0, "height": 200, "count": 13, "regY": 0, "width": 200},
	        // define two animations, run (loops, 1.5x speed) and jump (returns to run):
	        "animations": {"spin": [0, 12, "spin"]}
	    });
		
	   var acorn = new createjs.Sprite(data, "spin");
	   acorn.framerate = 10;	
	   
	   acorn.setTransform(300, 300, 0.8, 0.8);
	   
	   acorn.reposition = function() {
		   acorn.x = Math.random() * acorn.x;
		   acorn.y = Math.random() * acorn.y;
		   return this;
	   };
	   
	   return acorn.reposition();
	};
	
	return {
		create : create
	};
	
});