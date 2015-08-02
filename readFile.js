var fs = require('fs');
var utils = require('./words1.js');
var file = __dirname + '/words.txt';

var findLargest = function(){
	fs.readFile(file, function(err, data){
		if (err) throw err;
		var words = data.toString().split("\n");
		console.log(utils.findLargestCompound(words));
	})
};

console.log(findLargest());

var list = ['cat', 'dog', 'catdog','catdogcatcatdogcat', 'catdogcat'];
var list1 = ['hello', 'my', 'name', 'is', 'ybas', 'ybasis', 'ybasisis', 'asdfasdfasdfasdf'];
