function getTotalPrice(arr) {
    let test = 0;
    test = arr.reduce((acc, b) => {
        return acc += b
    });

    return '$' + Math.floor(test * 100) / 100;
}