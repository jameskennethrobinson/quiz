var words = function (list) {

	var sorted = Array.prototype.slice.apply(list).sort(function(a, b){
	  return b.length - a.length; 
	});

	var obj = {};
	var ans;

	sorted.forEach(function(item){
		obj[item] = item;
	});

	//console.log(obj)


	function recurse (str, frag) {

		console.log('fragment - ', frag, ' : string - ', sorted[0]);


		if (obj[str]){
			delete obj[str];
		}

		if (frag === sorted[0]){
			console.log('answer found');
			var ans = frag;
			return;
		}

		for (var i=1; i<=str.length; i++){

			var substr = str.slice(0, i);

			if (obj.hasOwnProperty(substr)){
				console.log('fragment found - ', substr)
				var str = str.split("");
				var removed = str.splice(0, i).join("");
				recurse(str.join(""), frag.concat(removed))
				return;
			}

		}

		console.log('This word is not a compound word');
		return;


		//var substr = str.slice(0, end);

		//var ind = sorted.indexOf(substr);
		//var bool = obj.hasOwnProperty(substr);

		//console.log(substr);
		//console.log(bool);

		// if (!bool){
		// 	//recurse(str, frag, ++end);
		// }


		// else{
		// 	var str = str.split("");
		// 	var removed = str.splice(0, end).join("");
		// 	recurse(str.join(""), frag.concat(removed), 0)	
		// }
	}

	recurse(sorted[0], "");
	return ans

}

var list = ['cat', 'dog', 'catdog', 'catdogcat'];

console.log(words(list));
