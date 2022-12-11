// var http = require("http");     // http 모듈 임포트
// var url = require("url");
// var fs = require("fs");
//
// http.createServer(function(request, res) {
//     var req = url.parse(request.url, true);
//     var filename = "." + req.pathname;      // 경로 세팅
//
//     fs.readFile(filename, function(err, data) {
//         if (err) {      // 파일 읽기 시도
//             res.writeHead(404, {"Content-Type": "text/html"});
//             return res.end("404 Not Found");
//         }
//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

// 웹에서 html 파일을 입력했을 때 이걸 읽어와라

var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function (request, respond) {
    var req = url.parse(request.url, true);     // request는 현재 객체. 이를 .url 해주어야 함
    var filename = "." + req.pathname;

    console.log(request.url);   // 객체에서 전체 url을 string으로 받아옴

    fs.readFile(filename, function(err, data) {
        if (err) {
            respond.writeHead(404, {"Content-Type": "text/html"});
            return respond.end("404 not found!");
        }
        respond.writeHead(200, {"Content-Type": "text/html"});
        respond.write(data);
        respond.end();
    });
}).listen(8080);