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
});

function setActive(n) {
	let main_nav = $('#main-nav ul li');
	$(main_nav).removeClass('active');
	$(main_nav[n]).addClass('active');
}