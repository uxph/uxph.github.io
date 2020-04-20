$(document).ready(function() {

	if(window.location.pathname != '/') {
		$('#nav-logo').addClass('show');
		$("#main-nav div.wrapper").addClass('justify-content-between');
		$("#main-nav div.wrapper").removeClass('justify-content-center');
	}

	$(window).scroll(function() {
		if($(window).scrollTop() > 0)
			$('#main-nav').addClass('shadow-sm');

		else $('#main-nav').removeClass('shadow-sm');

		// show uxph logo
		if(window.location.pathname == '/') {
			if($(window).scrollTop() > 200) {
				$('#nav-logo').addClass('show');
				$("#main-nav div.wrapper").addClass('justify-content-between');
				$("#main-nav div.wrapper").removeClass('justify-content-center');
			}

			else {
				$('#nav-logo').removeClass('show');
				$("#main-nav div.wrapper").removeClass('justify-content-between');
				$("#main-nav div.wrapper").addClass('justify-content-center');
			}
		}
	});

	$("#menu-bar").click(function() {
		$('#mobile-nav').addClass('show');
	});

	$('#menu-close').click(function() {
		$('#mobile-nav').removeClass('show');
	});

	$('#back-to-top').click(function() {
		$("html, body").animate({scrollTop: 0}, 400);
	});
});

$(document).scroll(function() {
	$(this).scrollTop() >= 655 ? $('#back-to-top').removeClass('hide') : $('#back-to-top').addClass('hide');
});

function setActive(n) {
	let main_nav = $('#main-nav ul li span');
	$(main_nav).removeClass('active');
	$(main_nav[n]).addClass('active');
}
