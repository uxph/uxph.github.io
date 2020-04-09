// scroll fancy
$(document).ready(function() {
	$('.auto-hidden').removeClass('auto-hidden');
});

$(document).scroll(function() {
	var hidden_sections = $('.hidden');
	for(let x = 0; x < hidden_sections.length; x++)
		$(this).scrollTop() >= $(hidden_sections[x]).offset().top - 400 ? $(hidden_sections[x]).removeClass('hidden') : x;
});