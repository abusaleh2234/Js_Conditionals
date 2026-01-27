
function evenAverage(evens){
    const Evens = [] 
    for (const num of evens) {
        // console.log(num);
        if(num % 2 === 0){
            Evens.push(num)
        }
    }
    let sum = 0
    // console.log(Evens);
    for (const even of Evens) {
        sum = sum + even
    }
    
    const even_Average = sum / Evens.length
    return even_Average; 
}

const numbers = [21,43,2,3,54,3,23,44,22,54,80,55]

const result = evenAverage(numbers)
console.log(result);
