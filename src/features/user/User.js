const crypt = require('../../utils/crypt')

module.exports = class User {
    constructor({ email, name, password }) {
        this._email = email
        this._name = name
        this._password = crypt.encrypt(password)
    }

    get email() {
        return this._email
    }

    get name() {
        return this._name
    }

    get password() {
        return this._password
    }

    toObj() {
        return {
            email: this.email,
            name: this.name,
            password: this.password
        }
    }
}
