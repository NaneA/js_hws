function isOdd(num) {

    if (num == 0) {
        return true;
    }

    return num % 10 % 2 != 0 ? isOdd(Math.floor(num / 10)) : false;

}
console.log(isOdd(5));