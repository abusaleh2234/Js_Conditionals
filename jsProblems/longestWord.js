function longestWord(words){
    const Words = words.split(" ")
    // console.log(word);
    let wLength = 0
    let Longest = ""
    for (const word of Words) {
        if (word.length > wLength) {
            wLength = word.length
            Longest = word
        }
    }
    return Longest;
}

const sentence = "I am learning Programming to become a programmer";
const result = longestWord(sentence);
console.log(result);

