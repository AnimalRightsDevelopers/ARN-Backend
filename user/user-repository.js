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
}

module.exports = new UserRepository();