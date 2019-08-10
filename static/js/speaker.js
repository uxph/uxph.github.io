// speaker JS functionality

// { name : [bio, photo] }
var profiles = {};

function addProfile(name, title, topic, bio, photo) {
	profiles[name] = [title, topic, bio, photo];
}

function updateModalSpeaker(name) {
	$('#modal-wrapper .content-wrapper').append(
		`<img src="${profiles[name][3]}" class="featured-image" />
		<br/>
		<h2 class="yellow">${name}</h2>
		<h3 class="white title-topic">${profiles[name][0]}</h3>
		<br/>
		<h4 class="gray title-topic">${profiles[name][1]}</h4>
		<br/>
		<p>${profiles[name][2]}</p>
		<br/>
		<div class="social-wrapper">
			<a href="#" target="blank"><i class="fas fa-globe"></i></a>
			<a href="#" target="blank"><i class="fab fa-twitter"></i></a>
			<a href="#" target="blank"><i class="fab fa-linkedin"></i></a>
		</div>
		`
		);

	$('#modal').show();
	$('body').addClass('stiff');
}

function print() {
	console.log(profiles);
}