function subStrings(a,n){
   let final = [];
    for(i=0; i<a.length-n+1; i++){
       final.push(a.substring(i, i+n));
    }
return final;
}

console.log(subStrings('abcdfghz', 7));