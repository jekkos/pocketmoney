define(['createjs'], function(createjs) {

	var create = function() {
		
	   var nest = new createjs.Bitmap("media/images/game/Nest-1.png");
	   nest.x = 60;
	   nest.y = 300;

	   nest.getCoordinates = function() {
			return { x: nest.x, y: nest.y};		
	   };
		
	   return nest;
	};
	
	return {
		create : create
	};
	
});