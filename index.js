var express = require("express");
const path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./client")));

var server = app.listen(10088, function () {
  var port = server.address().port;

  console.log("服务启动于http://%s:%s", "localhost", port);
});
