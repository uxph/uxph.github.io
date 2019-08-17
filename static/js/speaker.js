// speaker JS functionality

var profiles = {}; // { name : [bio, photo] }
var workshops = {}; // { topic : [facilitator, description] }

function addProfile(name, title, topic, bio, photo, linkedin) {
	profiles[name] = [title, topic, bio, photo, linkedin];
}

function addWorkshop(topic, facilitator, description) {
	workshops[topic] = [facilitator, description];
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
			<!--<a href="#" target="blank"><i class="fas fa-globe"></i></a>-->
			<!--<a href="#" target="blank"><i class="fab fa-twitter"></i></a>-->
			<a href="${profiles[name][4]}" target="blank"><i class="fab fa-linkedin"></i></a>
		</div>
		`
		);

	$('#modal').show();
	$('body').addClass('stiff');
}

function updateModalWorkshop(topic) {
	$('#modal-wrapper .content-wrapper').append(
		`<h2 class="yellow">${topic}</h2>
		<h3 class="white title-topic">${workshops[topic][0]}</h3>
		<br/>
		<p>${workshops[topic][1]}</p>
		<br/>
		`
		);

	$('#modal').show();
	$('body').addClass('stiff');
}

function print() {
	console.log(profiles);
}