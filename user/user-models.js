var uuid = require('uuid/v4');

class UserData {
    constructor(email, username, password) {
        this.id = uuid();
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

class UserView {
    constructor(id, email, username) {
        this.id = id;
        this.email = email;
        this.username = username;
    }
}

module.exports.UserData = UserData;
module.exports.UserView = UserView;