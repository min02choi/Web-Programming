var http = require("http");
var url = require("url");
var fs = require("fs");
var dt = require("./mymodule");     // 다른 방법?

var port = 8080;        // 포트 번호 지정
var myserver = http.createServer();


// listen(8080)이랑 같은 의미
myserver.listen(port, function() {
    console.log("<< 나의 웹서버 시작: %d >>", port);
});

// 클라이언트가 접속하여 연결이 만들어 질 떄 발생
var addr
myserver.on("connection", function(socket) {
    addr = socket.address();
    console.log(" - 클라이언트 접속: %s %d", addr.address, addr.port);
});

// 클라이언트가 요청할 떄 발생
var req
var page
myserver.on("request", function(request, res) {
    req = url.parse(request.url, true);
    page = req.pathname;

    console.log(" - HTML 문서 요청 %s", page);
    var filename = "." + page;

    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });

    var date = dt.myDateTime();     // 날짜를 저장하는 변수
    var log = " - 현재 날짜: " + date;
    var textmsg = "클라이언트 접속: " + addr.address + " " + addr.port + "\nHTML 문서 요청:" + page + "\n현재 날짜: " + date + "\n\n";

    fs.appendFile("mylog1.txt", textmsg, function(err) {
        if (err) {
            throw err;
        }
        console.log(log);
        // res.write();
        return res.end();
    });

});

// 서버를 종료할 떄 발생
myserver.on("close", function() {
    console.log("<< 나의 웹서버 종료 >>");
});
