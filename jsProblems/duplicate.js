function checkDuplicate(names){
    const singleName = []
    for (const name of names) {
        if (singleName.includes(name) === false) {
            singleName.push(name)
        }
    }
    return singleName;
}

const Name = ["Rahim","Karim","Jodu","Modhu", "Jodu", "Rahim", "Modhu"]

const inName = checkDuplicate(Name)

console.log(inName);
