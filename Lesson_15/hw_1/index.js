function createCalculator() {
    let calc = 0;

    function add(num) {
        calc += num;
    }

    function decrease(num) {
        calc -= num;
    }

    function reset() {
        calc = 0;
    }

    function getMemo() {
        return calc;
    }
}

export { createCalculator }