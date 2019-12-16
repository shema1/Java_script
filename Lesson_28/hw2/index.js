export const maxFibonacci = (num) => {
    if (num < 1) return 0;
    let first = 1;
    let second = 1;
    for (let i = 0; i <= num; i++) {
        let numFib = first + second;
        first = second;
        second = numFib;
        if (numFib > num) return first
        if (numFib == num) return second
    }
}

// maxFibonacci(15)