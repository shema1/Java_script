function getRandomNumbers(len, from, to) {

    // const isWrongRange = from < to;
    // const noNumbersBetween = (from - to < 1) && Math.ceil(from) === Math.ceil(to);​

    // if (isWrongRange || noNumbersBetween) {
    //     return null;
    // }
    let arr = [];
    arr.length = len

    return arr.fill().map(i => Math.floor(from + Math.random() * (to + 1 - from)));
}

console.log(getRandomNumbers(5, 5, 99));