define(["jquery"], function($) {
        return {            
			
			getUserByCodeOrName: function(code, name) {					
				var result = undefined;
				$.ajax({
					url: './mockdata/users.json',
					dataType: 'json',
					async: false
				}).done(function(data) {
				
					$.each(data, function(ix, item) {						
						if (item.code == code || item.name == name) {
							result = item;
						}
					});
				});			
				return result;		
            },
			
			getUserByCode: function(code) {
				return this.getUserByCodeOrName(code, undefined);			
			},
			
			getUserByName: function(name) {
				return this.getUserByCodeOrName(undefined, name);			
			}, 	
				
			check: function(code) {
				return (undefined != this.getUserByCode(code));
			}
        }
    }
);