function sumIntervals(intervals) {
  intervals.sort(([a,b],[c,d])=>{return a-c;})
  let max = -Number.MAX_VALUE;
  let res = 0;
  for(let [a,b] of intervals){
    max = Math.max(max,a);
    res += Math.max(0,b-max);
    max = Math.max(max,b);
  }
  return res;
}
