const sortDesc = numbers => {
    function sompare(a, b) {
        if (a > b) {
            return 1;
        }
        return -1;
    }
    numbers.sort(sompare);

    return numbers;
}