Array.prototype.sameStructureAs = function (other){
    if(!Array.isArray(other)){
        return false;
     }
     return checkItem(this,other);
}
function checkItem(arr1,arr2){
    if(!Array.isArray(arr1)&&!Array.isArray(arr2)){
        return true;
    }else if(!Array.isArray(arr1)||!Array.isArray(arr2)){
        return false;
    }else if(!(arr1.length == arr2.length)){
        return false;
    }else {
        for(let i = 0;i<arr1.length;i++){
            if(!checkItem(arr1[i],arr2[i])){
                return false;
            }
        }
        return true;
    }
}