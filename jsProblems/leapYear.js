function leapYear(year){
    if(year / 4 === 0){
        return "leap year";
    }
    else{
        return "Not leap Year"
    }
}

console.log(leapYear(2040));
