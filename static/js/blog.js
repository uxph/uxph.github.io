$('document').ready(function() {
	var excerpts = $('.excerpt p:first-of-type');

	for(let i = 0; i < excerpts.length; i++) {
		let div = $('.excerpt')[i];
		$(div).empty();
		$(div).append($(excerpts)[i]);
	}

	$('section hr:last-of-type').remove();
});