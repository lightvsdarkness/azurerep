var stream = function () 
{
	var ntwitter = require("ntwitter"),
credentials = require("./credentials.json"),
twitter;

twitter = ntwitter(credentials);
twitter.stream(
"statuses/filter",
	{ 
	"track": ["awesome"]
	},

function(stream) 
		{
stream.on('data', function(data) 
			{	
console.log(data.text);
			});

		});
return data.text;
};
module.exports = stream;