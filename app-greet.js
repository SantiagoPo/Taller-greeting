const greet = require("./greet.js");
const http = require("http");
console.log(greet.greeting("Node.js"));
console.log(greet.Hellocourso());

http.createServer(function(req,res){
    res.writeHead(200 ,{'Content-Type': 'text/html'});
    res.end(greet.greeting("Primera prueba de Node.js"));
}).listen(8080);
