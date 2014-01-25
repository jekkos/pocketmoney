define(["jquery"], function ($) {

	var maxAcorns = 5;
	var maxEnergy = 2;
	var currentAccorns = 0;
	var currentEnergy = 0;
	
	var drawAcorns = function() {
		$('div#acorns tr').empty();
		for (var i = 0; i < maxAcorns; i++) {
			$('div#acorns tr').append('<td><img src="media/images/game/acorn_'+ ((i < currentAccorns) ? 'on2' : 'off') +'.png"/></td>');
		}		
	};
	
	var incrementAcorns = function() {
		currentAccorns < maxAcorns && ++currentAccorns && drawAcorns();
	};
	
	var decrementAcorns = function() {
		currentAccorns > 0 && currentAccorns-- && drawAcorns();
	};
	
	var incrementEnergy = function() {
		currentEnergy < maxEnergy && currentEnergy++ && drawEnergy();
	};
	
	var decrementEnergy = function() {
		currentEnergy > 0 && currentEnergy-- && drawEnergy();
	};
	
	var drawEnergy = function() {
		$('div#energy').html('<td><img src="media/images/game/energy_'+ ((currentEnergy < maxEnergy) ? '1' : '2') +'.png"/></td>');
	};
	
    //Do setup work here
    var init = function() {
    	drawAcorns();
		drawEnergy();
    };
	
    return {
      init : init,
      incrementAcorns : incrementAcorns,
      incrementEnergy : incrementEnergy,
      decrementAcorns : decrementAcorns,
      decrementEnergy : decrementEnergy
    };
    
});
