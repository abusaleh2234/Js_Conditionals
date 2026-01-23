let sum =0;

for (let number = 0; number <= 50; number++) {
    // const element = ;
    // console.log(number);
    sum += number
    // console.log(sum);
}

let n = 8
for (let i = 1; i <= 10; i++) {
    // console.log(`${n} * ${i} = ${n*i}`);
}

let count = 81;

let timer = setInterval(() => {
  console.log(count);
  if (count === 65) {
    clearInterval(timer);
  }
  count--;
}, 1000);