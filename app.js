var express = require("express");
var errorHandler = require('./middlewares/error-handler');
var app = express();

// Get routes
var authenticationRoutes = require('./routes/authentication-routes');

// Middlewares, routing & error handling
app.use('/authentication', authenticationRoutes);
app.use(errorHandler);

app.listen(3000);