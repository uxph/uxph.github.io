// speaker JS functionality

// { name : [bio, photo] }
var profiles = {};

function addProfile(name, bio, photo) {
	profiles[name] = [bio, photo];
}

function updateModalSpeaker(name) {
	$('#modal-wrapper .content-wrapper').append(
		`<img src="${profiles[name][1]}" class="featured-image" />
		<br/>
		<h2 class="yellow">${name}</h2>
		<p>${profiles[name][0]}</p>`
		);

	$('#modal').show();
	$('body').addClass('stiff');
}

function print() {
	console.log(profiles);
}