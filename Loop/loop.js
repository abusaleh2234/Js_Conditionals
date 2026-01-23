const number = [23,45,65,78,2,87,34,84,23]

for (const num of number) {
    // console.log(num);
    
}

let num = 1

while (num <= 60) {
    // console.log("I will invest at least 6 hrs every single day for next 60 days!", num);
    num++
}
// let oddNum= 61
// while (oddNum <= 100) {
//     if (!(oddNum % 2 === 0)) {
//         console.log(oddNum);
        
//     }
//     oddNum++
// }
let evenNum= 78
while (evenNum <= 98) {
    if (evenNum % 2 === 0) {
        // console.log(evenNum);
        
    }
    evenNum++
}

let oddNum= 61
let sum = 0
while (oddNum <= 100) {
    if (!(oddNum % 2 === 0)) {
        // console.log(oddNum);
        sum = sum + oddNum
        console.log(sum);
        
    }
    oddNum++
}