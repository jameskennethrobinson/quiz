exports.findLargestCompound = function (list) {

	var ans;

	var ind = 0;

	var sorted = Array.prototype.slice.apply(list).sort(function(a, b){
	  return b.length - a.length; 
	});

	var obj = {};



	sorted.forEach(function(item){
		obj[item] = item;
	})

	function recurse (str, frag, end) {
		

		if (ind === sorted.length-1){
			console.log('end of list reached')
			return
		}

	

		if (frag === sorted[ind]){
			console.log('answer reached');
			ans = frag;
			return;
		} 

		console.log('end: - ', end, 'length: - ', str.length)

		if (end === str.length){
			console.log('end of word reached');
			//console.log('--------', obj[str]);
			delete obj[str]
			sorted.shift()
			//++ind;
			recurse(sorted[ind], "", 1);
		}


		var substr = str.slice(0, end);
		
		console.log('word being considered: - ', sorted[ind]);
		console.log('substr being considerd: - ', substr)

		var bool = obj.hasOwnProperty(substr) 

		console.log('bool: - ', bool)

	
		if (!bool){
			//console.log('fragment not found');
			recurse(str, frag, ++end);
		}

		if (bool){
			console.log('match found!')
			var str = str.split("");
			var removed = str.splice(0, end).join("");
			frag = frag.concat(removed);
			str = str.join("");


			console.log('remainder: ', str,' - removed: ', removed,  ' - frag: ', frag)

			recurse(str, frag, 1)	
		}
	
	}

	recurse(sorted[ind], "", 1);
	console.log('ans:', ans);
	return ans;
	// return obj

}
