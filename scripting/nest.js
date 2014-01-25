define(['createjs'], function(createjs) {

	var create = function() {
		
	   var nest = new createjs.Bitmap("media/images/game/Nest-1.png");
	   nest.setTransform(300, 300, 0.8, 0.8);
	   nest.x = 100;
	   nest.y = 60;

	   nest.getCoordinates = function() {
			return { x: nest.x, y: nest.y};		
	   };
		
	   return nest;
	};
	
	return {
		create : create
	};
	
});