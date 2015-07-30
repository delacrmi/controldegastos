var $form;

$(document).on('ready',function() {
  $form = $('form');
});

function createUser () {
  //sconsole.log($form.serializeObject());
  sendToServer({
    url: location.href,
    method: 'post',
    data: {user: $form.serializeObject()}
  }).done(function (data) {
    console.log(data);
  });
}