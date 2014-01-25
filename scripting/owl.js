
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
			console.log("owl sleep");
			owl.gotoAndPlay("sleep");
			
			owl.setFlying(false);
		};
		
		var bezier;
		var t = 0;
		var flying = false;
	
		owl.fly = function(x, y) {
			if (!flying) {
				
				var diffY = Math.abs(owl.y - y);
				var diffX = Math.abs(owl.x - x);
				
				bezier = new Bezier({x : owl.x, y : owl.y}, 
									 {x : owl.x, y: owl.y - diffY},
									 {x : x, y : owl.y - diffY}, 
									 {x : x, y :  y});
				this.gotoAndPlay("fly");
				flying = true;
			}
		};
		
		owl.setFlying = function(isFlying) {
			flying = isFlying;
			if (!flying) {
				t = 0;
				bezier = undefined;
			}
		};
		
		owl.isFlying = function() {
			return flying;
		};
		
		var downX, downY;
		
		owl.setFireDown = function (x, y){
			downX = x;
			downY = y;
		};
		
		owl.setFireUp = function (x, y){
			var targetX = (downX - x) * 3;
			var targetY = (y - downY) * 3;
			owl.fly(targetX, targetY);
		};
		
		owl.update = function() {
			
			if (t < 1 && this.isFlying()) {
				console.log("flying");
				t = t + 0.01; 
				owl.x = bezier.x(t);
				owl.y = bezier.y(t);
			} else if (owl.currentAnimation === 'fly') {
				console.log("sleep");
				owl.sleep();
			}
		};
		
		return owl;
	};
		
	return {
		create : create
	};
});