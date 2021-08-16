function AllEven(num1, num2) {

  let arr = [];
  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }

  arr = arr.filter(a => EvenDig(a))

  return arr.length > 0 ? arr : "Such numbers do not exist.";


  function EvenDig(num) {
    while (num > 0) {
      if (Math.floor(num % 10) % 2 != 0) {

        return false;
      }
      num /= 10;
    }
    return true;
  }


}
console.log(AllEven(99, 199));