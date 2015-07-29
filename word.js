var words = function(list){

	var largest = list[list.length-1];

	(function recurse (str, frag, end){

		if (end === largest.length){
			console.log('not found');
			return;
		} 

		if (frag === largest){
			console.log(frag)
			return;
		}

		var substr = str.slice(0, end);

		console.log('substr', substr);

		if (list.indexOf(substr) > -1){
			var str = str.split("");
			var removed = str.splice(0, end).join("");
			console.log(str.join(""))
			recurse(str.join(""), frag.concat(removed), end);
		}

		else {
			recurse(str, "", ++end);
		}

	})(largest, "", 1)

};


var list = ['cat', 'dog', 'catdog', 'catdogcat', 'catlkdajflkfajk'];
words(list);

// var word = "james";
// var arrWord = word.split("");
// console.log(arrWord);
// var frag = arrWord.splice(0,1);
// console.log(frag);


		// for (var i=1; i<=str.length; i++){
		// 	substr = str.slice(0, i);
		// 	if (list.indexOf(substr) > -1){
		// 		console.log(list.indexOf(substr));
		// 		var arrWord = word.split("");
				
		// 	}
		// }