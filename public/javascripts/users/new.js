var $form;

$(document).on('ready'function() {
	$form = $('form');
});

function createUser () {
	sendToServer({
		url: sessionStorage.proxy+'newUser',
		data: $form.serializeObject();
	});
}