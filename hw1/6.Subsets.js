
function subsets(arr){
let acc = [];
if(arr.length<3){
    return arr;
}
for(let i=0;i<arr.length;i++){
   
    for(let j=i+1; j<arr.length ;j++){

        for(let k=j+1; k<arr.length; k++){
             acc.push([arr[i], arr[j], arr[k]])
    }
    }
}
return acc;
}