$(document).ready(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > 0)
			$('#main-nav').addClass('shadow-sm');

		else $('#main-nav').removeClass('shadow-sm');
	});

	$("#main-nav").click(function() {
		if($(this).hasClass('show'))
			$('#mobile-nav').removeClass('show');

		else $('#mobile-nav').addClass('show');
	});
});