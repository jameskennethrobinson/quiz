var words = function(list){

	//the sorting operation will present the greatest computational load in this problem
	//"indexOf" will also present a large computational load when used over a very large set of words

	var copy = Array.prototype.slice.apply(list);

	var sorted = copy.sort(function(a, b){
	  return b.length - a.length; 
	});


	var ans;
	var bool = false;

	function recurse (str, frag, end){

		if (bool === true) return;

		if (frag === sorted[0]){
			console.log('found ------', frag);
			ans = frag;
			bool = true;
			return;
		}

		if (end === sorted[0].length){
			sorted.shift();
			recurse(sorted[0], "", 1);
		} 

		var substr = str.slice(0, end);

		if (list.indexOf(substr) > -1){
			var str = str.split("");
			var removed = str.splice(0, end).join("");
			recurse(str.join(""), frag.concat(removed), 0);
		}

		recurse(str, "", ++end);

	}

	recurse(sorted[0], "", 1)

	return ans;
};



var list = ['cat', 'dog', 'catdog', 'catdogcat', 'catlkdajflkfajk', 'foo', 'bar'];
console.log(words(list));
