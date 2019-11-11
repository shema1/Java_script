let calc = 0;

function add(num) {
    calc += num;
}

function decrease(num) {
    calc -= start;
}

function reset() {
    start = 0;
}

function getMemo() {
    return calc;
}

export { add, decrease, reset, getMemo }