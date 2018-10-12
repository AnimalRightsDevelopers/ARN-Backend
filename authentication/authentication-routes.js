var express = require('express');
var errors = require('../infrastructure/errors');
var router = express.Router();

var models = require('./authentication-models');
var validator = require('./authentication-validator');
var userFactory = require('../user/user-factory');
var userRepository = require('../user/user-repository');

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
    else if (userRepository.IsEmailUsed(credentials.email)) {
        res.status(201).send();
        return;
    }

    var data = userFactory.CreateUserDataFromRegistrationCredentials(credentials);
    userRepository.AddUser(data);

    res.status(201).send();
});

module.exports = router;