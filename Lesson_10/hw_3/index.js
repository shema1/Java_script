const superRound = (num, quantity) => {
    const test = Math.pow(10, quantity);
    return [
        Math.floor(num * test) / test,
        Math.round(num * test) / test,
        Math.ceil(num * test) / test,
        Math.trunc(num * test) / test, +num.toFixed(quantity),
    ];
}