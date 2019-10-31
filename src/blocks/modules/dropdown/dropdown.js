import $ from "jquery";
$(document).ready(function() {
	$('body').on('click', '.dropdown-main', function() {
		$(this).parents('.dropdown').toggleClass('active');
	});

});