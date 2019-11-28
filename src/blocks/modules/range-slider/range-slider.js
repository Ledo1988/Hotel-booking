import $ from "jquery";
import slider from "jquery-ui-bundle";
$(document).ready(function() {
$( function() {
	$( "#range-slider" ).slider({
		range: true,
		min: 0,
		max: 15000,
		values: [ 5000, 10000 ],
		step: 100,
		slide: function( event, ui ) {
			$( "#amount" ).val( ui.values[ 0 ] + "₽" + " - " + ui.values[ 1 ] + "₽" );
			$("#amount").val($("#amount").val().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
		}
	});
	$( "#amount" ).val( $( "#range-slider" ).slider( "values", 0 ) + "₽" + " - " + $( "#range-slider" ).slider( "values", 1) + "₽" );

	$("#amount").val($("#amount").val().replace(/\B(?=(\d{3})+(?!\d))/g, " "));

} );


});