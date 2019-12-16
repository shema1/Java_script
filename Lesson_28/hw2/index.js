export const maxFibonacci = (num) => {
    let first = 1;
    let second = 1;
    for (let i = 0; i <= num; i++) {
        let numFib = first + second;
        first = second;
        second = numFib;
        if (numFib > num) return first
    }
}