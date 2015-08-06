exports.findLargestCompound = function (list) {

	var obj = {};
	var ans;
	var ind = 0;

	//could populate object and sort at the same time
	var sorted = Array.prototype.slice.apply(list).sort(function(a, b){
	  return b.length - a.length; 
	});
	console.log(sorted)

	sorted.forEach(function(item){
		obj[item] = item;
	});

	function recurse (str, frag) {

		if (ind === sorted.length){
			console.log('No compounds words in this list');
			return;
		}

		//console.log('-------------')

		//console.log('fragment - ', frag)


		if (obj[sorted[ind]]){
			delete obj[sorted[ind]];
		}

		if (frag === sorted[ind]){
			console.log('answer found: ', frag);
			ans = frag;
			return;
		}



		for (var i=1; i<=str.length; i++){
			
		
			var substr = str.slice(0, i);
			//console.log('WHOLE - ', str);
			//console.log('CONSIDERED:', substr)

			if (obj.hasOwnProperty(substr)){ //&& i<=str.length){


				//console.log('FOUND - ', substr)
				var remainder = str.split("").splice(i).join("");

				//console.log('REMAINDER - ',remainder)
				
				recurse(remainder, frag.concat(substr))
		
			}
			

		}
		

		//console.log(sorted[0], "is not a compound word")
		//++ind;
		//recurse(sorted[ind], "");
	}



	

	if (!ans){
		console.log(sorted[ind], 'is not a compound word');
		++ind;
		recurse(sorted[ind], "");
		
	}

	console.log(ans, 'is the answer')

	return ans

};

var list = ['catar', 'c', 'cat', 'ar', 'asdfasdfasdfasdf', 'hellohellohellohello'];
var list1 = ['catar', 'c', 'atar', 'cat', 'asdfasdfasdf']
exports.findLargestCompound(list)
