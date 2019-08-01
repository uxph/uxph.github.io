$(document).ready(function() {
	$('#modal-close').click(function() {
		$('#modal-wrapper .content-wrapper').empty();
		$('#modal').hide();
		$('body').removeClass('stiff');
	});

	$('#overlay').click(function() {
		$('#modal-wrapper .content-wrapper').empty();
		$('#modal').hide();
		$('body').removeClass('stiff');
	});
});