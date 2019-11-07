function getRandomNumbers(length, from, max) {

    const isWrongRange = from < to;
    const noNumbersBetween = (from - to < 1) && Math.ceil(from) === Math.ceil(to);​
    if (isWrongRange || noNumbersBetween) {
        return null;
    }
    let arr = [];
    arr.length = length
    test = arr.fill().map(i => Math.floor(from + Math.random() * (to + 1 - from)));
    return test
}