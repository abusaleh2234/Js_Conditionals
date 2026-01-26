function inchToFeet(inch){
    const feet = inch / 12
    const _inch = inch % 12
    const result = parseInt(feet) + "feet" + _inch + "inch"
    return result
}

console.log(inchToFeet(42));
