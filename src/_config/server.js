const Koa = require('koa')
const Router = require('koa-router')

const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const helmet = require('koa-helmet')
const logger = require('koa-pino-logger')
const router = new Router()

const applyRoutes = require('./routes.js')

const app = new Koa()

module.exports = () => {
    console.log('[Server] => Setting up...')

    applyRoutes(router)

    app.use(bodyParser())
        .use(cors())
        .use(helmet())
        .use(logger())
        .use(router.routes())
        .use(router.allowedMethods())

    app.listen(8080)
}
