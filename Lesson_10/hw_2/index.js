const getRandomNumbers = (length, min, max) => {

    const isWrongRange = min < max;
    const noNumbersBetween = (min - max < 1) && Math.ceil(min) === Math.ceil(max);​
    if (isWrongRange || noNumbersBetween) {
        return null;
    }
    let arr = [];
    arr.length = length
    return arr.fill().map(i => Math.floor(min + Math.random() * (max + 1 - min)))
}

console.log(getRandomNumbers(6, 2, 52));