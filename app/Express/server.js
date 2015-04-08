var express = require("express"),
http = require("http"),
app = express();
// настроим статическую файловую папку
// для маршрута по умолчанию
// (см. также замечание о маршрутах далее)
app.use(express.static(__dirname + "/client"));
// создадим HTTP-сервер на базе Express
http.createServer(app).listen(3000);
// настроим маршруты
app.get("/hello", function (req, res) {
res.send("Hello, World!");
});
app.get("/goodbye", function (req, res) {
res.send("Goodbye, World!");
});