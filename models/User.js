const shortid = require('shortid');

class User {
    constructor(name, username, password) {
        this.id = shortid.generate();
        this.name = name;
        this.username = username;
        this.password = password;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

module.exports = User;