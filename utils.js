/*
This operation is O(N)
*/
exports.makeHash = function (list) {

	var obj = {};
	list.forEach(function(item){
		obj[item] = item;
	});
	return obj;

};

/*
I believe JS' "sort" is based off of merge sort, which is O(log N)
*/
exports.sortList = function(list){
	return Array.prototype.slice.apply(list).sort(function(a, b){
	  return b.length - a.length; 
	});
};

/*
Excluding the respective time complexities of JS' "split", "splice", or "join",
this operation is O(N) in respect to the word being considered. 
The "hash" lookup via 'hasOwnProperty' is O(1).
*/
var findCompound = function(word, list, hash){

	var bool = false;

	(function recurse (str, frag) {

		if (hash[word]){
		  delete hash[word];
		}

		if (frag === word){
		  bool = true;
		  return; 
		}

		for (var i=1; i<=str.length; i++){

		  var substr = str.slice(0, i);

		  if (hash.hasOwnProperty(substr)){
		  	recurse(str.slice(i), frag.concat(substr))
		  } 
		  

		}

	})(word, "")

	return bool;

};

/*
Worst case of this entire operation, is O(N^2), 
if the compound word is found at the end of the list.
*/
exports.findCompoundInList = function(list, hash){
	for (var i=0; i<list.length; i++){
		if ( findCompound(list[i], list, hash) ){
			return list[i]
			break;
		}
	}
};
