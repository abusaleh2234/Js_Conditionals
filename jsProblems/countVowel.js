function countVowel(sentence){
    let count = 0
    for (const letter of sentence.toLowerCase()) {
        // console.log(letter);
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            count++
            console.log(letter);
        }
    }
    return count;
}

const sentence = "The standard lorem ipsum  printer's friend for centuries."

const result = countVowel(sentence)
console.log(result);
