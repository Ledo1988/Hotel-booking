import $ from "jquery";
$(document).ready(function() {

	if ($('body .pagination-list .pagination-prev-item').next('li').hasClass('pagination-current-item')) {
		$('body .pagination-list .pagination-prev-item').remove();
	}

	if ($('body .pagination-list .pagination-next-item').prev('li').hasClass('pagination-current-item')) {
		$('body .pagination-list .pagination-next-item').remove();
	}

});





