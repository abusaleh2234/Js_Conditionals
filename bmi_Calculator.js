let weight = 72
let height = 1.6

// BMI = weight (kg) / (height (m))^2
let bmi = weight / (height)**2
// let bmi = 7**2

console.log(bmi);

if(bmi < 18.5){
    console.log("You are under weight");
    
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("You are normal");
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log("you are overweight.");
}
else{
    console.log(" you are obese");
}
