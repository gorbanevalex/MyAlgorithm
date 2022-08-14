function numberAndNull(number){
	if(number<100){
		return false;
	}
	return String(number).split("").filter(item=>{
		return Number(item)!=0?Number(item):false;
	}).length>1?false:true;
}

function numberOneNum(number){
	if(number<100){
		return false;
	}
	number = String(number);
	const num = number[0];
	for(let i = 0;i<number.length;i++){
		if(number[i]!=num){
			return false;
		}
	}
	return true;
}

function numberProgressTop(number){
	if(number<100){
		return false;
	}
	number = String(number);
	for(let i = 0;i<number.length-1;i++){
		if(number[i]!='9'){
			if(Number(number[i+1])-Number(number[i])!=1){
				return false;
			}
			if(number[i]=='0'){
				if(number[i+1]){
					return false;
				}
			}
		}else{
			if(Number(number[i+1]!=0)){
				return false;
			}
		}
	}
	return true;
}

function numberProgressBottom(number){
	if(number<100){
		return false;
	}
	number = String(number);
	for(let i = 0;i<number.length-1;i++){
		if(number[i]!='1'){
			if(Number(number[i])-Number(number[i+1])!=1){
				return false;
			}
			if(number[i]=='0'){
				if(number[i+1]){
					return false;
				}
			}
		}else{
			if(Number(number[i+1]!=0)){
				return false;
			}
		}
	}
	return true;
}

function numberPalindrom(number){
	if(number<100){
		return false;
	}
	const str = String(number);
	const str1 = String(number).split("").reverse().join("");
	return str===str1?true:false;
}

function checkUnical(number,awesomePhrases){
	if(awesomePhrases.indexOf(number)!=-1
  	||numberPalindrom(number)
  	||numberProgressBottom(number)
  	||numberProgressTop(number)
  	||numberOneNum(number)
  	||numberAndNull(number)){
  	return 2;
  }
  return 0;
}

function isInteresting(number, awesomePhrases = []) {
  if(checkUnical(number,awesomePhrases)==2){
  	return 2;
  }
  if((checkUnical(number+1,awesomePhrases)==2)||(checkUnical(number+2,awesomePhrases)==2)){
  	return 1;
  }
  return 0;
}
