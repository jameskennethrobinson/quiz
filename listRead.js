var fs = require('fs');
var utils = require('./compoundRecurse.js');
var file = __dirname + '/words.txt';

fs.readFile(file, function(err, data){
	if (err) throw err;
	var words = data.toString().split("\n");
	//console.log(words);
	var ans = utils.words(words);
	console.log(ans);
})



var list = ['cat', 'dog', 'catdog', 'catdogcatcatdogcat', 'dogdogdogdogcatcatcatcatcat', 'catdogcat'];

//console.log(utils.words(list));
