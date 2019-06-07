const controllers = require('./controllers')

module.exports = router => {
    router.post('/user/register', controllers.register)
}
