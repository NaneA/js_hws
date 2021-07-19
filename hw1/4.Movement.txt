
function movement(str){
 arr = str.match(/.{1,3}/g);
 arr = arr.map( a =>{
     if(a.length<3){
         return a;
     }
     let b = a.charAt(0);
     return a.slice(-2)+b;
 })
return arr.join('');
}

