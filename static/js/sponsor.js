const sponsors = {
	'home-credit': {
		'name': 'Home Credit',
		'type': 'Co-presenter',
		'desc': [
			`As a global tech-driven consumer finance company, Home Credit understands how technology can impact people's lives. In all 10 countries we are present in, from Czech Republic and USA all the way to the Philippines, we use technology to change how people buy and afford the things they need.`,
			`When we launched in Manila in 2013, our goal was simple: to provide financial tools even to first-time borrowers, at a speed that no one else can match. We are proud to have introduced these inclusive products to the country, and along the way, we at Home Credit Philippines have grown our customer base to over five million clients, and our workforce to over 12,000 employees.`],
		'social': [['https://www.homecredit.ph/', 'fas fa-globe']]
	},

	'collabox': {
		'name': 'CollaboX',
		'type': 'Gold Sponsor',
		'desc': [
			`CollaboX is a social enterprise that offers a new twist to gift giving. Each gift boX is filled with locally produced artisanal goods, hand-selected by your favorite tastemakers. Give a gift to yourself or to a friend, and discover the stories behind homegrown products created with love and purpose.`],
		'social': [['https://www.facebook.com/pg/collaboxdotco', 'fab fa-facebook-square']]
	},

	'uxarmy': {
		'name': 'UXArmy',
		'type': 'Gold Sponsor',
		'desc': [
			`UXArmy's vision is to make the Internet experience seamless and personalized with an astute understanding of people’s preferences and thoughtful application of technology.`,
			`Our <b>Online User Testing Platform</b> helps UX Designers, Researchers, Tech entrepreneurs, and Product entrepreneurs establish the effectiveness of their product pre-launch.`,
			`With <b>over 20k UserAdvocate Community members</b> we deliver insights and collaborate to shape the future of customer experience to create awesome product experiences.`,
			`With UX and tech in our DNA, we have evolved from our experience to offer end-to-end consulting engagements to clients from <b>user research</b> and <b>design</b> to <b>custom software development</b> and implementation. From concept to launch,  we aim to elevate your ability to serve your customers.`,
			`Over the last 7 years, UXArmy has been helping clients in a variety of industries and roles to strengthen their product experiences and create new business opportunities.`,
			`<br/><a href="https://www.uxarmy.com/signup" target="_blank" class="text-link">Create your own Test</a>`,
			`<a href="https://community.uxarmy.com/signup" target="_blank" class="text-link">Get paid to Test websites/apps. Join us as a User Tester</a><br/>`],
		'social': [
			['https://www.uxarmy.com/', 'fas fa-globe'],
			['https://www.facebook.com/UXArmy/', 'fab fa-facebook-square'],
			['https://www.linkedin.com/company/uxarmy/', 'fab fa-linkedin']]
	}
};

function updateModalSponsor(id, image) {
	let target = sponsors[id];
	let desc = target['desc'].map(x => `<p>${x}</p>`);
	let links = target['social'].map(x => `<a href="${x[0]}" target="blank"><i class="${x[1]}"></i></a>`);
	$('#modal-wrapper .content-wrapper').append(
		`<img src="${image}" class="featured-image" />
		<br/>
		<h2 class="blue">${target['name']}</h2>
		<h3 class="white title-topic">${target['type']}</h3>
		<br/>
		${desc.join('')}
		<br/>
		<div class="social-wrapper">
			${links.join(' ')}
		</div>
		<br/>
		`
		);

	$('#modal').show();
	$('body').addClass('stiff');
}

$(document).ready(function() {
	$('.sponsor-modal').click(function() {
		updateModalSponsor($(this).attr('id'), $(this).find('img').attr('src'));
	});
});