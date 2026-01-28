function celsiusToFahrenheit(celsius){
    const Fahrenheit = (celsius * (9/5)) + 32;
    return Fahrenheit
}

const fahrenheit = 34
const result = celsiusToFahrenheit(fahrenheit)
console.log(result);
