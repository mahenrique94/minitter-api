const db = require('../../_db/models/')

module.exports = {
    create: user => db.User.create(user)
}
