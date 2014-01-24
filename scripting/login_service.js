define(["jquery"], function($) {

	function checkLogin(code) {
		$.ajax({
			dataType: "json",
			url: "mock/users.json",
		}).done(function() {
			alert('done');
		});
	
	}
});