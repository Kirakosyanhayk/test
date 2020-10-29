let number = 9493;
 let sum = 0;

function sumofnumbers(number) {
    while(number){
        sum += number % 10;
        number = Math.trunc(number / 10);
    }
    return sum;


}
console.log(sumofnumbers(number));