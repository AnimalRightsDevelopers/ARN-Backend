var express = require("express");
var bodyParser = require('body-parser');
var errorHandler = require('./middlewares/error-handler');
var app = express();

// Get routes
var authenticationRoutes = require('./authentication/authentication-routes');

// Middlewares, routing & error handling
var jsonParser = bodyParser.json();

app.use(jsonParser);
app.use('/authentication', authenticationRoutes);
app.use(errorHandler);

app.listen(3000);