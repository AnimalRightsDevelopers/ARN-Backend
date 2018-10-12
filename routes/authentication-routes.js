var express = require('express');
var errors = require('../infrastructure/errors');
var router = express.Router();

router.post('/register', function(req, res, next) {
    throw new errors.NotImplementedError("The registration functionality has not yet been implemented");
});

module.exports = router;