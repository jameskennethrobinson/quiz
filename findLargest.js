var fs = require('fs');
var utils = require('./utils.js');
var file = __dirname + '/' + process.argv[2];

(function(words){
  fs.readFile(words, function(err, data){
    if (err) throw err;
    var words = data.toString().split("\n");
    var hash = utils.makeHash(words);
    var sorted = utils.sortList(words);
    console.log(utils.findCompoundInList(sorted, hash));
  })
})(file);
