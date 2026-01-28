function repeatedNumber(numbers, find){
     let count = 0;
    for (const num of numbers) {
        if (num === find) {
            count++
        }
    }
    return count
}

const numbers = [5,6,11,12,98, 5, 5]
const find = 56
const Result = repeatedNumber(numbers,find)
console.log(Result);
