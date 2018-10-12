var express = require("express");
var errorHandler = require('./middlewares/error-handler');
var app = express();

app.get("/home", function (req, res) {
    res.send("There is no place like home");
});
app.get("/about", function (req, res) {
    res.send("I like fruits");
});
app.use(errorHandler);

app.listen(3000);