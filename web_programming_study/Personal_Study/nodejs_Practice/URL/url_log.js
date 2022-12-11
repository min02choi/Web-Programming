var url = require("url");
var fs = require("fs");

var addr = 'http://localhost:8080/form_test02.htm?name=rose&msg=forever%20young';
var req = url.parse(addr, true);
var page = req.pathname;     // '/form_test02.htm'
var data = req.query;             // an object: { name: 'rose', msg: 'forever young' }

log = "요청: "+page+ " [메시지] "+data.name+": "+data.msg;
fs.appendFile('mylog1.txt', '\n'+log, function (err) {
    if (err) throw err;
    console.log(log);
});