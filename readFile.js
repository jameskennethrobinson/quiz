var fs = require('fs');
var utils = require('./findLargest.js');
var file = __dirname + '/words.txt';

var findLargest = function(words){
	fs.readFile(words, function(err, data){
		if (err) throw err;
		var words = data.toString().split("\n");
		var hash = utils.makeHash(words);
		var sorted = utils.sortList(words);
		console.log(utils.findCompoundInList(sorted, hash));
	})
};

findLargest(file);
