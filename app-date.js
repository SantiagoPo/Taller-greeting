const datetime = require("./date.js");
const http = require("http");
const date = "En Colombia es la siguiente hora: " + datetime.myDateTime();


http.createServer(function(req,res){
    res.writeHead(200 ,{'Content-Type': 'text/html'});
    res.end(date);
}).listen(8080);

console.log(datetime.myDateTime());