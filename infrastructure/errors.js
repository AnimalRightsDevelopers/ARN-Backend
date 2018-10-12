// Base error
class BaseError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
}
module.exports.BaseError = BaseError;

// 400 Bad Request
class BadRequestError extends BaseError {
    constructor(message) {
        super(400, message);
    }
}
module.exports.BadRequestError = BadRequestError;

// 401 Unauthorized
class UnauthorizedError extends BaseError {
    constructor(message) {
        super(401, message);
    }
}
module.exports.UnauthorizedError = UnauthorizedError;

// 403 Forbidden
class ForbiddenError extends BaseError {
    constructor(message) {
        super(403, message);
    }
}
module.exports.ForbiddenError = ForbiddenError;

// 404 Not Found
class NotFoundError extends BaseError {
    constructor(message) {
        super(404, message);
    }
}
module.exports.NotFoundError = NotFoundError;

// 500 Internal Server Error
class InternalServerError extends BaseError {
    constructor(message) {
        super(500, message);
    }
}
module.exports.InternalServerError = InternalServerError;