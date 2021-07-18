function unique(arr){

let obj = {};
for(let i=0; i<arr.length; i++){
    console.log(Object.keys(obj), arr[i]);
    if(Object.keys(obj).indexOf(arr[i].toString())>0){
          obj[arr[i]]+=1;
    }
    else{
        obj[arr[i]]=1;
    }
}
for(let i in obj){
    obj[i]/=arr.length;
}
return obj;

}
