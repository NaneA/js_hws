 
let sum  = function sumOfDig(value){
        let sum = 0;
        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        return sum;
    }
 function findSum(num){
     let final = num;
     while(final>10){
         final = sum(num);
         num = final
     }
     return final;
    
    
}


// let a = sumOfDig(14)
// console.log(a);

console.log(findSum(99999999));