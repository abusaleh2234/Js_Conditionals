let age = 50;
let isStudent = false;
let ticket = 800
if (age <= 10) {
    console.log("pass free");   
}
else if(isStudent){
    console.log((ticket * 50)/100);
    
}
else if(age >= 60){
    console.log((ticket * 15)/100);
    
}
else{
    console.log(ticket);
    
}