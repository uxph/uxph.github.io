$(document).ready(function() {
    var timelines = $('.timeline');
    $(timelines[timelines.length - 1]).css('border-color', 'transparent');
    $($('.hidden')[0]).removeClass('hidden');
});

$(document).scroll(function() {
	var hidden_sections = $('.hidden');
	for(let x = 0; x < hidden_sections.length; x++)
		$(this).scrollTop() >= $(hidden_sections[x]).offset().top - 400 ? $(hidden_sections[x]).removeClass('hidden') : x;
});
