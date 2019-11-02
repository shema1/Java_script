let sum = 0;
let a = 50;
let b = 100;


for (let i = a; i < b; i++) {

    if (i % 2 != 0) {
        console.log('Found')
        sum += i;
    }

}

if (sum * 5 > 5000) {
    console.log("Bigger");
} else {
    console.log("Smaller or equal");
}