
function LongestNonRepStr(str){
   
    let arr=[];
    let stack = "";
    
    for(let j=0; j<str.length; j++){{
    for(let i=0; i<str.length-j; i++){
             if(arr.indexOf(str.charAt(j+i)) < 0 || str.charAt(j+i) == " "){
            
                arr.push(str.charAt(j+i))
             }
             else{
                 
                 if(arr.length>=stack.length){
                     stack = arr.join('');
                 }
                 arr = [];
                 break;
             }

    }}
}
return stack;
}
