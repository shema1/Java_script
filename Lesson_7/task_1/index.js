const getSpecialNumbers = numbers => {
    let secialNumber = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            secialNumber.push(numbers[i])
        }

    }
    return secialNumber;
};