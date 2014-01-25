
define(["createjs", "bezier"], function(createjs, Bezier) {

	var img = new Image();
	img.src = "media/images/game/Character_Owl_2_sprite.png"; 
	
	var create = function() {
		var data = new createjs.SpriteSheet({
			"images": [img],
			"frames": {"regX": 0, "height": 300, "count": 9, "regY": 0, "width": 300},
	        // define two animations, run (loops, 1.5x speed) and jump (returns to run):
	        "animations": {"sleep": [0, 2, "sleeped"], "fly": [3, 4, "fly", 2], "sleeped": [2]}
	    });
		
	   	var owl = new createjs.Sprite(data, "sleep");

	    owl.setTransform(100, 90, 0.8, 0.8);
	   	owl.framerate = 2;	
		
		owl.sleep = function() {
			this.gotoAndPlay("sleep");
		};
		
		var bezier;
		var t = 0;
	
		owl.fly = function(x, y) {
			bezier = new Bezier(owl.x, owl.y, x, y);
			this.fly();
		};
		
		owl.update = function() {
			if (t < 1 && bezier) {
				t = t + 0.001; 
				owl.x = bezier.x(t);
				owl.y = bezier.y(t);
			} else {
				bezier = undefined;
				this.sleep();
			}
		};
		
		return owl;
	};
		
	return {
		create : create
	};
});