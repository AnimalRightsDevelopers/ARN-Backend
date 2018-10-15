var uuid = require('uuid/v4');

class UserRepository {
    constructor() {
        this.users = [];
    }

    /**
     * Add a user
     * @param {*} user 
     */
    AddUser(user) {
        this.users.push(user);
    }

    IsEmailUsed(email) {
        var user = this.GetUserByEmail(email);

        return Boolean(user);
    }

    GetUserByEmail(email) {
        var user = this.users.find((element) => {
            return element.email === email;
        });

        return user;
    }

    GenerateToken(user) {
        user.token = uuid();
        var expiration = new Date();
        expiration.setSeconds(expiration.getSeconds() + 3600);
        user.tokenExpiration = expiration;

        return user.token;
    }
}

module.exports = new UserRepository();