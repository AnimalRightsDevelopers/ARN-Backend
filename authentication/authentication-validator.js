var errors = require('../infrastructure/errors');

var isValidEmail = function(email) {
    if (!email) {
        throw new errors.BadRequestError("Email must contain a value");
    }
    else if (typeof(email) !== "string") {
        throw new errors.BadRequestError("Email must be a string");
    }
    else if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)) {
        return false;
    }

    return true;
}

var isValidUsername = function(username) {
    if (!username) {
        throw new errors.BadRequestError("Username must contain a value");
    } 
    else if (typeof(username) !== "string") {
        throw new errors.BadRequestError("Username must be a string");
    }

    return true;
}

var isValidPassword = function(password) {
    if (!password) {
        throw new errors.BadRequestError("Password must contain a value");
    }
    else if (typeof(password) !== "string") {
        throw new errors.BadRequestError("Password must be a string");
    }
    else if (!(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(.{8,})$/).test(password)) {
        return false;
    }

    return true;
}

var isValidPasswordRepeat = function(password, repeat) {
    if (password !== repeat) {
        return false;
    }

    return true;
}

// Exports
module.exports.IsValidEmail = isValidEmail;
module.exports.IsValidUsername = isValidUsername;
module.exports.IsValidPassword = isValidPassword;
module.exports.IsValidPasswordRepeat = isValidPasswordRepeat;