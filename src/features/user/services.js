const db = require('../../_db/models/')

module.exports = {
    register: payload => db.User.create(payload)
}
