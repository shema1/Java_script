const getRandomNumbers = (length, min, max) => {
    let arr = [];
    arr.length = length
    return arr.fill().map(i => Math.floor(min + Math.random() * (max + 1 - min)))
}

console.log(getRandomNumbers(6, 2, 52));