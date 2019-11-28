import "./import/modules";
import "./import/components";

import $ from "jquery";
$(document).ready(function() {

	$('body').click(function(event) {
		if ($('body .dropdown').hasClass('active')) {
			if (!$(event.target).closest('.dropdown').length) {
				$('body').find('.dropdown').removeClass('active');
			}
		} else if ($('body .checkbox-list-expandable').hasClass('active')) {
			if (!$(event.target).closest('.checkbox-list-expandable').length) {
				$('body').find('.checkbox-list-expandable').removeClass('active');
			}
		}

	});
});