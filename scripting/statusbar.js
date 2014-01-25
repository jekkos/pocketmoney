define(["jquery"], function ($) {

    //Do setup work her
    var init = function() {
		var noAcorns = 5;
		var noEnergy = 2;
							
		setAcorns = function(acorns) {
			$('div#acorns tr').empty();
			for (var i = 0; i < noAcorns; i++) {
				$('div#acorns tr').append('<td><img src="media/images/acorn_'+ ((i > acorns) ? 'on' : 'off') +'.png"/></td>');
			}		
		};
		
		setEnergy = function(engergy) {
			for (var i = 0; i < noEnergy; i++) {				
				
				$('div#energy tr').append('<td><img src="media/images/energy_'+ ((true) ? '1' : '2') +'.png"/></td>');
			}		
		};
		
		setAcorns(0);
		setEnergy(0);
    };
	
	

    return {
      init : init
    };
    
});
