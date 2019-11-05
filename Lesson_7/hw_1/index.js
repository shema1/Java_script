const numbers = [8, 2, 7, 6, 4, 1];

function squareArray(arr) {
    let squareNumbers = [];
    if (!Array.isArray(arr)) {
        return null
    } else {
        for (let i = 0; i < arr.length; i++) {
            squareNumbers.push(arr[i] * arr[i]);
        }
    }
    return squareNumbers;
}


console.log(squareArray(numbers));