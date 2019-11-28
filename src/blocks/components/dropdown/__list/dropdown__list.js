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

		$(this).parents('.dropdown').find('.dropdown-main input').change();

	});

	$('body .dropdown .dropdown-main').on('change', 'input', function() {
		if ($(this).parents('.dropdown').hasClass('rooms')) {
			$(this).val('');
			var dropdownTotal = $(this).val();
			var dropdownInput = $(this).parents('.dropdown').find('.dropdown__list input');

			$(dropdownInput).each(function () {
				var dropdownMainTitle = $(this).parents('.dropdown__option').find('.title');

				if ($(this).val() == 1) {
					dropdownMainTitle = $(dropdownMainTitle).text().replace("спальни", "спальня").replace("кровати", "кровать").replace("ванные комнаты", "ванная комната");
					if (dropdownTotal == '') {
						dropdownTotal = $(this).val() + ' ' + dropdownMainTitle;
					} else {
						dropdownTotal = dropdownTotal + ' ,' + $(this).val() + ' ' + dropdownMainTitle;
					}
				} else if ($(this).val() < 1) {
					return true;
				}
				else {
					dropdownTotal = dropdownTotal + ' ,' + $(this).val() + ' ' + $(dropdownMainTitle).text();
				}
			});

			$(this).val(dropdownTotal);
		} else if ($(this).parents('.dropdown').hasClass('guests')) {

		}

	});

});