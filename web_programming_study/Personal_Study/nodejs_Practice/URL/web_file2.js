var http = require("http");
var url = require("url");
var fs = require("fs");

var port = 8080;        // 포트 번호 지정
var myserver = http.createServer();

myserver.listen(port, function() { });
myserver.on("connection", function(socket) { });
myserver.on("close", function() { });

myserver.on("request", function (request, res) {
    var req = url.parse(request.url, true);
    var page = req.pathname;
    var data = req.query;       // 기본적으로 찢어 놓을 것

    if (page.match('.htm')) {
        console.log("HTML 문서 요청: %s", page);
        var filename = "." + page;

        fs.readFile(filename, function(err, data) {
            if (err) {
                res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
                return res.end("404 Not Found");
            }
            res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            res.write(data);
            return res.end();
        });
    }
    else {
        console.log("클라이언트 요청: %s", req.path);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(
            '<!doctype html>'+
            '<html>'+
            '  <body>'+
            '    <h4> 요청 프로세스 : ' + req.pathname + ' </h4>'+
            '    <p> 전달 파라메터 : ' + req.search + ' </p>'+
            '  </body>'+
            '</html>');
        console.log("pathname: " + req.pathname);
        console.log("search: " + data.name);
        res.end();
    }
});