const http = require('http')

const requisicao = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write("<h1>TESTE A SER EXIBIDO NO BROWSER...</h1>")
    response.end();
}

const server = http.createServer(requisicao)
const callback = function(){
    console.log('servidor no ar....');
}
server.listen(3000, callback)