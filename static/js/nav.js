$(document).ready(function(){
	$('#close').click(function(){
		$('#mobile-nav').addClass("hide");
		$('#negative').addClass("hide");
	});

	$('#negative').click(function(){
		$('#mobile-nav').addClass("hide");
		$('#negative').addClass("hide");
	});

	$('#hamburger').click(function(){
		$('#mobile-nav').removeClass("hide");
		$('#negative').removeClass("hide");
	});

	$('#back-to-top').click(function() {
		$("html, body").animate({scrollTop: 0}, 400);
	});
});

$(document).scroll(function() {
	$(this).scrollTop() >= 655 ? $('#back-to-top').removeClass('hide') : $('#back-to-top').addClass('hide');
});

function setActive(index){
	var main_items = $('#main-nav ul li');
	main_items.removeClass("active");
	$(main_items[index]).addClass("active");

	/*
	var mobile_items = $('#mobile-nav ul li');
	mobile_items.removeClass("active");
	$(mobile_items[index + 1]).addClass("active");
	*/
}
