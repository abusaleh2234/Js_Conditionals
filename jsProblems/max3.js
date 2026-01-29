function max3(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log("Number 1 is biggest");
    }
    else if(num2 > num1 && num2 > num3){
        console.log("Number 2 is biggest");
    }
    else{
        console.log("Number 3 is biggest");
    }
}

const n1 = 354;
const n2 = 54;
const n3 = 43;

const biggest = max3(n1,n2,n3)
// console.log(biggest);
