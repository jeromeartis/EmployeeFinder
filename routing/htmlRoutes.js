const path = require('path');


module.exports = function(app) {
// ROUTES
app.get('/home', function(request, response) {
  request.sendFile(path.join(__dirname, './public/home.html'));
});

  app.get('/survey', function(request, response) {
    response.sendFile(path.join(__dirname, "./public/survey.html"));
  });
  
}
