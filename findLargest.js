exports.findLargestCompound = function (list) {

	var obj = {};
	var ans;
	//var ind = 0;

	//could populate object and sort at the same time
	var sorted = Array.prototype.slice.apply(list).sort(function(a, b){
	  return b.length - a.length; 
	});
	//console.log(sorted)

	sorted.forEach(function(item){
		obj[item] = item;
	});

	function recurse (str, frag) {

		// if (ind === sorted.length){
		// 	console.log('No compounds words in this list');
		// 	return;
		// }

		console.log('fragment - ', frag)

		if (obj[sorted[0]]){
			delete obj[sorted[0]];
		}

		if (frag === sorted[0]){
			console.log('answer found: ', frag);
			ans = frag;
			return;
		}

		if (!str) return;




		for (var i=1; i<=str.length; i++){

			
			var substr = str.slice(0, i);
			//console.log('WHOLE - ', str);
			//console.log('CONSIDERED:', substr)

			if (obj.hasOwnProperty(substr)){ //&& i<=str.length){


				console.log('FOUND - ', substr)
				var remainder = str.split("").splice(i).join("");

				console.log('REMAINDER - ',remainder)
				
				recurse(remainder, frag.concat(substr))
		
			}
			

		}

		//console.log(sorted[0], "is not a compound word")
		//++ind;
		//recurse(sorted[ind], "");
	}

	recurse(sorted[0], "");

	return ans

};

var list = ['catar', 'c', 'cat', 'ar'];
var list1 = ['catar', 'c', 'atar', 'cat']
exports.findLargestCompound(list1)