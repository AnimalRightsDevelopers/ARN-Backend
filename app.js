var express = require("express");
var app = express();

app.get("/home", function (req, res) {
    res.send("There is no place like home");
});
app.get("/about", function (req, res) {
    res.send("I like fruits");
});

app.listen(3000);