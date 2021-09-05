function missingInBetween(arr){
    return Math.max(...arr)-Math.min(...arr)-arr.length+1;
}

console.log(missingInBetween([4,1,9,8,7]));