// Dependencies
const express = require('express');
const path = require('path');

// Sets up express for use
const app = express();

// Sets the port for the server to listen on
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
