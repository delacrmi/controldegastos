//send information to server
function sendToServer(obj){
  if (!obj.data || !obj.url)
    return new Error("The data and url information can't be null");

  var value = {
    url: obj.url,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(obj.data)
  };

  if (obj.method)
    value.type = obj.method

  return $.ajax(value);
}

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};