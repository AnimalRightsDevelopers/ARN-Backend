class RegistrationCredentials {
    /**
     * Create a RegistrationCredentials type
     * @param {string} email Email of the user - must be unique
     * @param {string} username Username of the user
     * @param {string} password Password of the user
     * @param {string} repeat Repeated password
     */
    constructor(email, username, password, repeat) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.repeat = repeat;
    }
}

module.exports.RegistrationCredentials = RegistrationCredentials;