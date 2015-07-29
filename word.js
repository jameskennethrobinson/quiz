var words = function(list){

	//the sorting operation will present the greatest computational load in this problem
	//"indexOf" will also present a large computational load when used over a very large set of words

	var sorted = list.sort(function(a, b){
	  return b.length - a.length; 
	});

	var ans;

	var ind = 0;

	(function recurse (str, frag, end){

		if (sorted[ind] === undefined) return;

		if (frag === sorted[ind]){
			console.log('found ------', frag);
			ans = frag;
			return;
		}

		if (end === sorted[ind].length){
			console.log('not found');
			ind++;
			recurse(sorted[ind], "", 1)
		} 

		var substr = str.slice(0, end);

		console.log('substr', substr);

		if (list.indexOf(substr) > -1){
			var str = str.split("");
			var removed = str.splice(0, end).join("");
			recurse(str.join(""), frag.concat(removed), end);
		}

		recurse(str, "", ++end);

	})(sorted[ind], "", 1)

	return ans;
};



var list = ['cat', 'dog', 'catdog', 'catdogcat', 'catlkdajflkfajk', '1234', 'ladjf;lajksdf;lajskdf;laksdjfla;sdkf'];
console.log(words(list));
