function topThreeWords(text) {
	text+=' ';
	let words = new Map();
	let word = '';
	text.split('').map(item=>{
		if(item.match(/[a-z]/i)||(item=="'")){
			word += item;
		}else{
			if(words.has(word.toLowerCase())){
				let value = words.get(word.toLowerCase()) + 1;
				words.set(word.toLowerCase(),value);
			}else if(word!=''){
				words.set(word.toLowerCase(),1);
			}
			word = '';
		}
	})
	words.delete("'");
	let result = [];
	for(let item of words){
		result.unshift(item);
	}
	words = result;
	console.log(words);
	if(words.length==0){
		return [];
	}
	if(words.length==1){
		return [words[0][0]];
	}
	words = words.sort((first,second)=>{
		return first[1]-second[1];
	})
	words.reverse();
	if(words.length == 2){
		return [words[0][0],words[1][0]];	
	}else{
		return [words[0][0],words[1][0],words[2][0]];
	}
}

console.log(topThreeWords("a a c b b"));