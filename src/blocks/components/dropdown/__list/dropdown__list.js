import $ from "jquery";
$(document).ready(function() {
	$('body .dropdown__list').on('click', '.counter__btn', function() {
		var dropdownAmount = $(this).siblings('.counter-quantity').find('input');
		var currentDropdownVal = parseInt($(dropdownAmount).val());

		if ($(this).hasClass('plus')) {
			if (!isNaN(currentDropdownVal)) {
				$(dropdownAmount).val(currentDropdownVal + 1);
			} else {
				$(currentDropdownVal).val(0);
			}
		} else if ($(this).hasClass('minus')) {
			if (!isNaN(currentDropdownVal) && currentDropdownVal > 0) {
				$(dropdownAmount).val(currentDropdownVal - 1);
			} else {
				$(dropdownAmount).val(0);
			}
		}

		$(dropdownAmount).change();
	});

	$('body .dropdown__list-btns').on('click', ':reset', function() {
		$(this).parents('.dropdown__list-wrapper').find('.counter-quantity input').val(0);
		$(this).parents('.dropdown__list-wrapper').find('.counter-quantity input').change();
	});

	$('body .dropdown__list .counter-quantity').on('change', 'input', function() {
		$(this).siblings('label').find('span').html($(this).val());
	});

});