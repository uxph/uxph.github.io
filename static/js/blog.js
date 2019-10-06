$('document').ready(function() {
	var excerpts = $('.excerpt');

	for(let i = 0; i < excerpts.length; i++) {
		let div = $('.excerpt')[i];
		let content = $(excerpts[i].children[0]).clone();
		$(div).empty();
		$(div).append(content);
	}

	$('section hr:last-of-type').remove();

	lightNav(); // replace roadshow logo to negative version
});

function lightNav() {
	$('body#light #nav-logo').attr('src', '../../assets/logos/UXPH_logo-neg@2x.png')
}