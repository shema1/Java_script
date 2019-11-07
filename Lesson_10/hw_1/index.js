function getTotalPrice(arr) {
    let test = 0;
    test = arr.reduce((acc, b) => {
        return acc += b
    });

    return '$' + test.toFixed(2);
}