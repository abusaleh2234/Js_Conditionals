
let word = "I am a programer. I am hard working."
let sfr = ""
for (const letter of word) {
    if (letter === "a"|| letter === "A") {
        word.replace("a", "X") 
    }
    
}
let str = "capitalize every first letter of each word";
let words = str.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
  result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  console.log(result);
  

  if (i < words.length - 1) {
    result += " ";
  }
}


// console.log(result);

