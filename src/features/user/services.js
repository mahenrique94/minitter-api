const Validator = require('fastest-validator')

const repository = require('./repository')

const User = require('./User')

const v = new Validator()

module.exports = {
    register: payload => {
        const schema = {
            email: { max: 255, min: 5, type: 'string' },
            name: { max: 120, min: 1, type: 'string' },
            password: { max: 16, min: 8, type: 'string' }
        }
        const errors = v.validate(payload, schema)

        if (Array.isArray(errors) && errors.length) {
            throw new Error(errors)
        }

        return repository.create(new User(payload).toObj())
    }
}
