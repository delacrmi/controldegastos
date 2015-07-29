var $form;

$(document).on('ready',function() {
  $form = $('form');
});

function createUser () {
  //sconsole.log($form.serializeObject());
  sendToServer({
    url: location.href,
    method: 'post',
    data: {account: $form.serializeObject()}
  }).done(function (data) {
    console.log(data);
  });
}