// volunteers javascript

var content = {};

const addContent = (...data) => {
	// name, responsibilities, requirements, learn
	content[data[0]] = {
		"name": data[0],
		"responsibilities": data[1],
		"requirements": data[2],
		"learn": data[3],
		"description": data[4]
	}
};

$(document).ready(function() {
	$($('#position-select small')[0]).addClass('active');

	$('#position-select small').click(function() {
		$('#position-select small').removeClass('active');
		$(this).addClass('active');

		let name = $(this).attr('data-id');

		// change content
		$('#role-name').html(content[name]['name']);
		$('#role-description').html(content[name]['description']);

		$('#role-responsibilties').empty();
		$('#role-responsibilties').append(content[name]['responsibilities'].map(x => `<li>${x}</li>`).join('\n'));

		$('#role-requirements').empty();
		$('#role-requirements').append(content[name]['requirements'].map(x => `<li>${x}</li>`).join('\n'));

		$('#what-you-learn').empty();
		$('#what-you-learn').append(content[name]['learn'].map(x => `<li>${x}</li>`).join('\n'));
	});
});
