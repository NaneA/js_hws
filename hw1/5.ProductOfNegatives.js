

function ProdOfNeg(arr){
     
    arr = arr.map((a)=> {
        let temp;
       
        if(a.length==undefined){
            return 'Not arr'
        }
     for(let i=0; i<a.length;i++){
         if(a[i]<0 ){
             if(temp < a[i] || temp == undefined)
               temp = a[i];
         }
     }

     return temp;
     
    
    });
    if(arr.indexOf('Not arr')>=0){
        return "Invalid Argument"
    }
    arr = arr.reduce( (a,b) => {
        return a* (b||1)
    });
    if(isNaN(arr)){
        return("No negatives")
    }
    return arr;
}
