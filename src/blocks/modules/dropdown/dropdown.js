import $ from "jquery";
$(document).ready(function() {
	$('body').on('click', '.dropdown-main', function() {
		$(this).parents('.dropdown').toggleClass('active');
	});

	$('body').click(function(event) {
		if ($('body .dropdown').hasClass('active')) {
			if (!$(event.target).closest('.dropdown').length) {
				$('body').find('.dropdown').removeClass('active');
			}
		}

		});
});