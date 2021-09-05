function recFlat(arr, flat = []) {

    for (let i = 0; i < arr.length; i++) {
      //  console.log(arr[i]);
        if (Array.isArray(arr[i])) {
               recFlat(arr[i], flat)
        } 
        else
        flat.push(arr[i]);
        
    }
  //  console.log(flat, "here");
    return flat;
}


function flatArrNoRec(arr2) {
    let arr = (arr2 + "").split(',');
    return arr.map(a => +a);
}


let arr = [14, [1, [[[3, []]], 1],0]];

// let arr = [1, [3, 4, [1, 2]], 10]
// console.log(arr[1].length);



console.log(recFlat(arr));

