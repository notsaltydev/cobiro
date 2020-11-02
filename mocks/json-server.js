const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./mocks/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}))

router.render = (req, res) => {
    res.jsonp({
        data: res.locals.data
    })
}

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running')
})
