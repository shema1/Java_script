function argSum() {
    return [...arguments].reduce((acc, elem) => {
        return acc + elem
    }, 0);
}

console.log(argSum(1, 2, 3, 4))

export { argSum }