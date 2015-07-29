exports.findLargestCompound = function (list) {

	var ans;
	var sorted = Array.prototype.slice.apply(list).sort(function(a, b){
	  return b.length - a.length; 
	});

	function recurse (str, frag, end) {

		//this should be return when length is zero
		//instead is being run too many times
		//not sure if actually needed - should create tests
		////////////////////
		if (sorted.length === 0){
			return
		}
		////////////////////

		
		if (frag === sorted[0]){
			ans = frag;
			return;
		} 

		if (end === sorted[0].length){
			sorted.shift();
			recurse(sorted[0], "", 1);
		}

		var substr = str.slice(0, end);
		var ind = sorted.indexOf(substr);

		if (ind === -1){
			recurse(str, frag, ++end);
		}

		else{
			var str = str.split("");
			var removed = str.splice(0, end).join("");
			recurse(str.join(""), frag.concat(removed), 1)	
		}
	
	}

	recurse(sorted[0], "", 1);
	return ans;

}
