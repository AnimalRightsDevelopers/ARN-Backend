var models = require('./user-models');

/**
 * Create a UserData based on the data within a RegistrationCredentials
 * @param {RegistrationCredentials} credentials Registration credentials
 */
var CreateUserDataFromRegistrationCredentials = function (credentials) {
    var data = new models.UserData(credentials.email, credentials.username, credentials.password);

    return data;
}

/**
 * Create a UserView based on the data within an UserData
 * @param {UserData} data 
 */
var CreateUserViewFromUserData = function (data) {
    var view = new models.UserView(data.id, data.email, data.username);

    return view;
}

module.exports.CreateUserDataFromRegistrationCredentials = CreateUserDataFromRegistrationCredentials;
module.exports.CreateUserViewFromUserData = CreateUserViewFromUserData;