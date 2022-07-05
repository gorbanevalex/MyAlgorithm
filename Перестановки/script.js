function swap(ch,i,j){
  ch = ch.split('');
  [ch[i],ch[j]] = [ch[j],ch[i]];
  return ch.join("");
}
function gellAllPermutations(result,string,index = 0){
  if(index==string.length){
    return false;
  }else{
    for(let i = index;i<string.length;i++){
      string = swap(string,i,index);
      gellAllPermutations(result,string,index+1);
      result.add(string);
    }
  }
}
function permutations(string,index = 0) {
  let result = new Set();
  gellAllPermutations(result,string);
  return [...result.values()];
}

console.log(permutations('aabb'));




