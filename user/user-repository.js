var uuid = require('uuid/v5');

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
}

module.exports = new UserRepository();