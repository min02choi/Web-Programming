// 포트 지겅 한 경우. cmd에서 서버 실행 후 localhost에 들어가서 새로고침하면 파일이 계속 수정됨
/*
var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    fs.appendFile("myfile.txt", "iKON BOBBY", function(err) {
        if (err) throw err;
        console.log("Saved");
    });
}).listen(8080);
*/

// 포트 지정 한한 경우. cmd창에서 한번만 실행되고 종료
var fs = require("fs");

fs.appendFile("myfile.txt", "iKON BOBBY", function(err) {
    if (err) throw err;
    console.log("Saved");
});