var stream = function () {
	var ntwitter = require("ntwitter"),
credentials = require("./credentials.json"),
twitter;

twitter = ntwitter(credentials);
twitter.stream(
"statuses/filter",
{ "track": ["awesome"]},

function(stream) {
stream.on("data", function(tweet) {
//console.log(tweet.text);
});

});
return tweet.text;
};
module.exports = stream;