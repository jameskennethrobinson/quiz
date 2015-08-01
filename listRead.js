var fs = require('fs');
var utils = require('./compoundRecurse.js');
var file = __dirname + '/words.txt';

var findLargest = function(){
	fs.readFile(file, function(err, data){
		if (err) throw err;
		var words = data.toString().split("\n");
		//console.log(words);
		var ans = utils.findLargestCompound(words);
		console.log(ans);
	})
};

//findLargest();



var list = ['cat', 'dog', 'catdog','catdogcatcatdogcat', 'catdogcat'];
var list1 = ['hello', 'my', 'name', 'is', 'ybas', 'ybasis', 'ybasisis', 'asdfasdfasdfasdf'];

utils.findLargestCompound(list1)

//list1.shift();
//console.log(list1);