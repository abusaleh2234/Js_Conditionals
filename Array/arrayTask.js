const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// console.log(colors.reverse());
const collors = []
for (const color of colors) {
    // console.log(color);
    // collors.unshift(color)
}
// console.log(collors);
const even = []
const numbers = [12, 98, 5, 41, 23, 78, 46];

for (let i = 0; i <= numbers.length -1 ; i++) {
    // console.log(numbers[i]);

    if (numbers[i] % 2 === 0) {
        // even.push(numbers[i])
    }
        
}
// console.log(even);

var creators = ['Tom', 'Tim', 'Tin', 'Tik']
// console.log(creators.join(''));

let allCreators = ""
for (const creator of creators) {
    // console.log(creator);

    allCreators =  allCreators.concat(creator)

}
// console.log(allCreators);


const statement = 'I am a hard working person'
 let words = statement.split(" ").reverse()
// console.log(words);

 let Statement = ""
 for (const word of words) {
    // console.log(word);
    Statement = Statement.concat( " ", word)
 }
// console.log(Statement);


let number = [1, 2, 3]
// console.log(number);

number[0] = 99
// console.log(number);


const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

for (const student of students) {
    // console.log(student);
    // console.log(student.name , " Score" , student.marks);
    
    
}

const num = [
  [1, 2],
  [3, 4],
  [5, 6]
]

// console.log(num);

num[1][0] = 99;
// console.log(num);

