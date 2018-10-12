var errors = require('../infrastructure/errors');

var errorHandler = function (error, req, res, next) {
    if (!error.status) {
        console.log("Unhandled exception: " + JSON.stringify(error));
        error = new errors.InternalServerError("Internal Server Error");
    }

    res.status(error.status).send(error);
}

module.exports = errorHandler;