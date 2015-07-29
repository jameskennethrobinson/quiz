var words = function (list) {

	var sorted = Array.prototype.slice.apply(list).sort(function(a, b){
	  return b.length - a.length; 
	});
	var ans;

	function recurse (str, frag, end) {
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
			recurse(str.join(""), frag.concat(removed), 0)	
		}
	}

	recurse(sorted[0], "", 1);
	return ans;

}

var list = ['cat', 'dog', 'catdog', 'catdogcatcatdogcat', 'catdogcat'];

console.log(words(list));
