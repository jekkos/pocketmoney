
define(['createjs'], function(createjs) {
	
	var img = new Image();
	img.src = "media/images/game/spinner2.png"; 
	
	var create = function() {
		var data = new createjs.SpriteSheet({
			"images": [img],
			"frames": {"regX": 0, "height": 200, "count": 13, "regY": 0, "width": 200},
	        // define two animations, run (loops, 1.5x speed) and jump (returns to run):
	        "animations": {"spin": [1, 13, "spin"]}
	    });
		
	   var spinner = new createjs.Sprite(data, "spin");
	   
	   spinner.setTransform(100, 90, 0.8, 0.8);
	   
	   spinner.setPosition = function(x, y) {
		   spinner.x = x;
		   spinner.y = y;
	   };
	   return spinner;
	};
	
	return {
		create : create
	};
	
});