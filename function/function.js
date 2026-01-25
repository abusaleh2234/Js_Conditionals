// ///////////////Task 1
function multiply(num1, num2, num3, num4){
    const multi = num1* num2* num3* num4
    return multi
}
const x = 10;
const y = 12;
const z = 20;
const n = 30;
const multipl = multiply(x, y, z,n,)
// console.log(multipl);
// ///////////////  task 2
function oddOrEven(number){
    if (number % 2 !== 0) {
        return number * 2
    }
    else{
        return number / 2
    }
}

const numnum = 6;
const result = oddOrEven(numnum) 
// console.log(result);


// ///////////// Task 3

function average(numbers){
    // console.log(numbers);
    let sum = 0
    for (const number of numbers) {
        // console.log(number);
        sum = sum + number
    }
    console.log(sum ,numbers.length);
    return sum / numbers.length
    
}

const ages = [12,23,16,43,50,26]
const avg = average(ages)
console.log(avg);

