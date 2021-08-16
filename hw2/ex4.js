function MinPosInt(arr, acc) {
    if (arr.length == 0 && acc >= 0) {
        return acc;
    }

    if (arr.length == 0 && acc == undefined) {
      
        return -1;
    }

    if (arr[arr.length - 1] >= 0 && (arr[arr.length - 1] < acc || acc == undefined)) {
         acc = arr[arr.length - 1];
     }
    arr.pop();
    return MinPosInt(arr, acc)
}

console.log(MinPosInt([-5, -9, -111, -1000, -7]));
