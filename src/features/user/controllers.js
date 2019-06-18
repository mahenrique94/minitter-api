const Boom = require('boom')

const services = require('./services')

module.exports = {
    register: async ctx => {
        const {
            request: { body }
        } = ctx
        try {
            const newUser = await services.register(body)
            return (ctx.body = { result: newUser })
        } catch (error) {
            ctx.response.status = 400
            return (ctx.body = Boom.badRequest(null, error.message))
        }
    }
}
