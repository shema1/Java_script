let sum = 0;

for (let i = 0; i <= 1000; i++) {
    sum += i;
}

let a = sum % 1234;
let b = sum / 1234;


console.log(b > a);