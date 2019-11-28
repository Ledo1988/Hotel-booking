import $ from "jquery";
import mask from "jquery-mask-plugin";
$(document).ready(function() {

    $('body input[name="date"]').filter(function() {
        return this.value;
    }).addClass('filled');

    $('input[name="date"]').mask('00.00.0000');

    $('body').on('change', 'input[name="date"]', function () {
        if (!$(this).val() == '') {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    });
});



