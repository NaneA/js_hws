function longestString(str){
    arr = str.split(' ').join().split('-').join().split(',');
    let max=arr[0];
   for(let i=0; i<arr.length-1; i++){
           if(max.length<=arr[i+1].length){
               max = arr[i+1];
           }
   }
    return max;
}
