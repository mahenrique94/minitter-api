const Boom = require('boom')
const Validator = require('fastest-validator')

const v = new Validator()

const services = require('./services')

module.exports = {
    register: async ctx => {
        const {
            request: { body }
        } = ctx
        const schema = {
            email: { max: 255, min: 5, type: 'string' },
            name: { max: 120, min: 1, type: 'string' },
            password: { max: 16, min: 8, type: 'string' }
        }
        const errors = v.validate(body, schema)

        if (Array.isArray(errors) && errors.length) {
            ctx.response.status = 400
            return (ctx.body = Boom.badRequest(null, errors))
        }

        try {
            const newUser = await services.register(body)
            return (ctx.body = { result: newUser })
        } catch (error) {
            ctx.response.status = 400
            return (ctx.body = Boom.badRequest(null, error.message))
        }
    }
}
