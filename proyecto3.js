var modulos = require("./modulos/modulo");

var http = require("http");
var port = 8080;

http.createServer(modulos.handle_request).listen(port, "127.0.0.1");