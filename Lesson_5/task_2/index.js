let m = 10;
let n = 20;
let count = m;
let result = 1;

do {
    if (count % 2 == 1) {
        result *= count;
    }
    count++
} while (count < n);
console.log(result);