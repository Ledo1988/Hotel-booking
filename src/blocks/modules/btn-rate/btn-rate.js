import $ from "jquery";
$(document).ready(function() {

    if ($('body .btn-rate-list .btn-rate').hasClass('active')) {
        $('body .btn-rate-list .btn-rate.active').prevAll('.btn-rate').addClass('active');
    }

    $('body .btn-rate-list').on('mouseover', '.btn-rate', function () {
        $(this).prevAll('.btn-rate').addClass('hover');
    });

    $('body .btn-rate-list').on('mouseleave', '.btn-rate', function () {
        $(this).parents('.btn-rate-list').find('.btn-rate').removeClass('hover');
    });

    $('body .btn-rate-list').on('click', '.btn-rate', function () {
        $(this).parents('.btn-rate-list').find('.btn-rate').removeClass('hover active');
        $(this).addClass('active');
        $(this).prevAll('.btn-rate').addClass('active');
    });
});