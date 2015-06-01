var express = require("express"),
app = express(),
http = require("http"),
port = process.env.PORT || 1337;
//var stream = require("./stream.js");
var mongoose= require('mongoose');
var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI;
mongoose.connect(connectionString);

app.use(express.bodyParser());

var CommSchema = new mongoose.Schema({
id : String,
commentariy : String
});

var com1 = mongoose.model("Comm", CommSchema);

// var c1 = new com1({"id":"Doggie", "commentariy":"goodie"});
// var saveCom = c1.save(function (err) 
// {
// if (err !== null) 
// 		{
// console.log(err);
// console.log("Объект не был сохранен!");
// 		} else 
// 	{
// console.log("Объект был сохранен!");
// 	}
// });

// var findCom = com1.find({"id" : "bad"}, function (err, comments) {
// 	comments.forEach(function (com) {
// 		com.commentariy = "the best!";
// 		com.save(function (err) {
// 			if (err) {
// 				console.log(err);
// 			}
// 		});
// 	});
// });

// var removeCom = com1.remove({"id":"Doggie", "commentariy":"goodie"}, function(err) {
// 	if(err!== null) {
// 		console.log(err);
// 	}
// });

// var coolObject = {my: 12345};
// var toDos = [];

//app.use(express.urlencoded());
app.use(express.static(__dirname + "/client"));

// создадим HTTP-сервер на базе Express
http.createServer(app).listen(port);

// app.get("/someway.json", function (req, res) {
// 	res.json(stream);
// });

var ToDB = function (newId, newComment) {
	//ПРИМЕР:
	//var newToDo = new ToDo({"description":req.body.description, "tags":req.body.tags});
	//ОШИБКА БЫЛА:
 	//var newcom1 =  new com1({"Id" : newId, "Comment" : newComment });
 	var newcom1 =  new com1({"id" : newId, "commentariy" : newComment });
 	newcom1.save(function (err, result) {
		if (err !== null) {
			console.log(err);
		}
		else {
			console.log("Объект был сохранен!");
			//return result;
		}
	});
};

app.post("/todos", function (req, res) {
  // БЫЛО:
  //var newToDo = req.body;
  //СТАЛО:
  var newToDoId = req.body.Id;
  var newToDoComment = req.body.Comment;
  //console.log(newToDo);
  //toDos.push(newToDo);
  var workToSave = ToDB(newToDoId, newToDoComment);
  // отправляем простой объект
	// if (req.body.Commenta == "a") {
	// 	res.send(req.body);
	// }
	// else {
		res.json(req.body);
	// }

});