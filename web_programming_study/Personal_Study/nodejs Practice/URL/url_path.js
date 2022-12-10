// var url = require("url");
// var addr = "http://localhost:8080/worldcup.htm?year=2022&month=november";
// var req = url.parse(addr, true);
//
// console.log(req.host);      // localhost:8080
// console.log(req.pathname);  // /worldcup.htm
// console.log(req.search);    // ?year=2022&month=november
//
// var data = req.query;
// console.log(data.year + "년 " + data.month + "월");

/* url 모튤 */
var url = require("url");
var addr = "http://localhost:8080/worldcup.htm?year=2022&month=november";
var req = url.parse(addr, true);

console.log(req.host);
console.log(req.pathname);
console.log(req.search);

var data = req.query;
console.log(data.year + "년 " + data.month + "월");
