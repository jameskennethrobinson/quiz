exports.makeHash = function (list) {

	var obj = {};
	
	list.forEach(function(item){
		obj[item] = item;
	});

	return obj;
};


exports.sortList = function(list){
	return Array.prototype.slice.apply(list).sort(function(a, b){
	  return b.length - a.length; 
	});
}

exports.findCompound = function(word, list, hash){

	var ans = undefined;

	(function recurse (str, frag) {

		if (hash[word]){
			delete hash[word];
		}

		if (frag === word){
			ans = frag;
			return; 
		}

		for (var i=1; i<=str.length; i++){

			var substr = str.slice(0, i);

			if (hash.hasOwnProperty(substr)){ 
				var remainder = str.split("").splice(i).join("");
				recurse(remainder, frag.concat(substr))
			}

		}
	})(word, "")

	return ans;

};

exports.findCompoundInList = function(list, hash){
	for (var i=0; i<list.length; i++){
		if ( exports.findCompound(list[i], list, hash) ){
			return list[i]
			break;
		}
	}
};
