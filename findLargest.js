exports.findLargestCompound = function (list) {

	var obj = {};
	var ans;
	var ind = 0;

	//could populate object and sort at the same time
	var sorted = Array.prototype.slice.apply(list).sort(function(a, b){
	  return b.length - a.length; 
	});

	sorted.forEach(function(item){
		obj[item] = item;
	});

	function recurse (str, frag) {

		if (ind === sorted.length){
			console.log('No compounds words in this list');
			return;
		}

		if (obj[sorted[ind]]){
			delete obj[sorted[ind]];
		}

		if (frag === sorted[ind]){
			console.log('answer found');
			ans = frag;
			return;
		}

		for (var i=1; i<=str.length; i++){

			var substr = str.slice(0, i);

			if (obj.hasOwnProperty(substr)){
				var str = str.split("");
				var removed = str.splice(0, i).join("");
				recurse(str.join(""), frag.concat(removed))
				return;
			}

		}

		++ind;
		recurse(sorted[ind], "");
	}

	recurse(sorted[0], "");

	return ans

};
