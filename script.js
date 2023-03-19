const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000

const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'text/html')

    const createPath = (page) => path.resolve(_dirname, 'pages', '${page}.html')

    const basePath = ''

    switch (req.url){
        case '/':
        case '/main':
        case '/home':
        case '/page1':
            basePath = createPath('page1')
            res.statusCode = 200
            break
        case '/page2':
            basePath = createPath('page2')
            res.statusCode = 200
            break
        default:
            basePath = createPath('error')
            res.statusCode = 404
            break
    }
})
server.listen(PORT, 'localhost', (error) =>{
    error ? console.log(error) : console.log()
})