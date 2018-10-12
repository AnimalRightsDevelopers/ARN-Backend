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
        var user = this.users.find((element, index, array) => {
            return element.email === email;
        });

        return Boolean(user);
    }
}

module.exports = new UserRepository();