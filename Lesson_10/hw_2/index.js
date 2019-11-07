function getRandomNumbers(len, from, to) {

    const isWrongRange = to < from;
    const noNumbersBetween = (to - from < 1) && Math.ceil(to) === Math.ceil(from);


    if (isWrongRange || noNumbersBetween) {
        return null;
    }


    return Array(len).fill().map(i => Math.floor(Math.random() * (to - from) + from));
}

console.log(getRandomNumbers(5, 5, 99));