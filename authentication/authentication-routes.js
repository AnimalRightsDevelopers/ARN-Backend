var express = require('express');
var errors = require('../infrastructure/errors');
var router = express.Router();

var models = require('./authentication-models');
var validator = require('./authentication-validator');

router.post('/register', function(req, res, next) {
    var credentials = Object.assign(new models.RegistrationCredentials, req.body);
    
    if (!validator.IsValidEmail(credentials.email)) {
        throw new errors.BadRequestError("Email must be a valid email address");
    }
    else if (!validator.IsValidUsername(credentials.username)) {
        throw new errors.BadRequestError("Invalid username");
    }
    else if (!validator.IsValidPassword(credentials.password)) {
        throw new errors.BadRequestError("Password must contain at least 8 characters of which at least one lowercase letter, one uppercase letter and one digit");
    }
    else if (!validator.IsValidPasswordRepeat(credentials.password, credentials.repeat)) {
        throw new errors.BadRequestError("Repeated password must match password");
    }

    throw new errors.NotImplementedError("The registration functionality has not yet been implemented");
});

module.exports = router;