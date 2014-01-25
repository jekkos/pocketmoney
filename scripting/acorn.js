
define(['createjs'], function(createjs) {
	
	var img = new Image();
	img.src = "media/images/game/acorn_on.png"; 
	
	var create = function() {
		var data = new createjs.SpriteSheet({
			"images": [img],
			"frames": {"regX": 0, "height": 124, "count": 1, "regY": 0, "width": 120},
	        // define two animations, run (loops, 1.5x speed) and jump (returns to run):
	        "animations": {"show": [1, "show"]}
	    });
		
	   var acorn = new createjs.Sprite(data, "show");
	   
	   acorn.setTransform(100, 90, 0.8, 0.8);
	   
	   acorn.reposition = function() {
		   acorn.x = Math.random() * acorn.x;
		   aconr.y = Math.random() * acorn.y;
	   };
	   return acorn;
	};
	
	return {
		create : create
	};
	
});