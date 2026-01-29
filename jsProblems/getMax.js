function getMax(numbers){
    let maxNum = numbers[0];
    for (const number of numbers) {
        // console.log(number);
        if(maxNum > number){
            maxNum = number
        }
    }
    return maxNum;
}

const Numbers = [32,12,45,67,8,87,9,82,76,54,43,403,34]
const result = getMax(Numbers)
console.log(result);
