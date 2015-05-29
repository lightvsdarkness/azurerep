var express = require("express"),
app = express(),
stream = require("./stream.js"),
http = require("http"),
port = process.env.PORT || 1337;

var mongoose= require('mongoose');
var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI;
mongoose.connect(connectionString);

var CommSchema = mongoose.Schema
({

"id" : String,

"commentariy" : String

});

var com1 = mongoose.model("Comm", CommSchema);

// var c1 = new com1({"id":"Doggie", "commentariy":"goodie"});

// c1.save(function (err) 
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

com1.find({"id" : "bad"}, function (err, comments) 
	{

comments.forEach(function (com) 
		{
com.commentariy = "the best!";

com.save(function (err) 
			{

	if (err)	
				{


console.log(err);

				}

			});

		});

	});

com1.remove({"id":"Doggie", "commentariy":"goodie"}, function(err)
{
	if(err!== null)
	{
		console.log(err);
	}
});

var coolObject = {my: 12345};
var toDos = [];

//app.use(express.urlencoded());
app.use(express.static(__dirname + "/client"));

// создадим HTTP-сервер на базе Express
http.createServer(app).listen(port);

app.get("/someway.json", function (req, res)
{
res.json(stream);
});




 var ToDB = function (newId, newComment)
 		{
 			var com1 =  { "Id" : newId, "Comment" : newComment };
 			com1.save(function (err) 
{

if (err !== null) {
console.log(err);
		}
		else 
	{
console.log("Объект был сохранен!");
	}
}


);
 		};



app.use(express.bodyParser());
app.post("/todos", function (req, res) 
{
  // сейчас объект сохраняется в req.body
  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo);
  ToDB(newToDo.Id, newToDo.Comment);
  // отправляем простой объект
  res.json({"message":"Вы разместили данные на сервере!"});
});

