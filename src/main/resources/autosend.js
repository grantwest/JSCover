window.attachEvent("onunload", jscoverage_sendCoverage);

function jscoverage_sendCoverage()
{
  var request = jscoverage_createRequest();
  request.open('POST', '^[jscover-server-uri]/jscoverage-store', false);
  request.onreadystatechange = function (event) {
    if (request.readyState === 4) {
      var message;
      try {
        if (request.status !== 200 && request.status !== 201 && request.status !== 204) {
          throw request.status;
        }
        message = request.responseText;
      }
      catch (e) {
        if (e.toString().search(/^\d{3}$/) === 0) {
          message = e + ': ' + request.responseText;
        }
        else {
          message = 'Could not connect to server: ' + e;
        }
      }
    }
  };
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(jscoverage_serializeCoverageToJSON());
}
