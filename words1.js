var words = function (list) {

	var obj = {};
	var ans;
	//could populate object and sort at the same time
	var sorted = Array.prototype.slice.apply(list).sort(function(a, b){
	  return b.length - a.length; 
	});

	sorted.forEach(function(item){
		obj[item] = item;
	});

	function recurse (str, frag) {

		console.log('fragment - ', frag, ' : string - ', str);

		if (obj[sorted[0]]){
			delete obj[sorted[0]];
		}

		if (frag === sorted[0]){
			console.log('answer found');
			var ans = frag;
			console.log(ans)
			return;
		}

		for (var i=1; i<=str.length; i++){

			var substr = str.slice(0, i);

			console.log('substr - ', substr)

			if (obj.hasOwnProperty(substr)){
				console.log('fragment found -', substr)
				var str = str.split("");
				var removed = str.splice(0, i).join("");
				recurse(str.join(""), frag.concat(removed))
				return;
			}

		}

		console.log(sorted[0], 'is not a compound word');
		return;
	}

	recurse(sorted[0], "");
	console.log(ans);
	return ans

};

var list = ['cat', 'dog', 'catdog', 'catdogcat'];

console.log(words(list));
