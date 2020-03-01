$(document).ready(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > 0)
			$('#main-nav').addClass('shadow-sm');

		else $('#main-nav').removeClass('shadow-sm');
	});

	$("#menu-bar").click(function() {
		$('#mobile-nav').addClass('show');
	});

	$('#menu-close').click(function() {
		$('#mobile-nav').removeClass('show');
	});
});