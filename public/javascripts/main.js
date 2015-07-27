sessionStorage.proxy = data.proxy;

//send information to server
function sendToServer(obj){
  if (!obj.data || !obj.url)
    return new Error("The data and url information can't be null");

  var value = {
    url: obj.url,
    //type: obj.method || 'post',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(obj.data)
  };
  if (obj.method)
  value.type = obj.method;

  return $.ajax(value);
}