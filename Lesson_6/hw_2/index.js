const numbers = [8, 2, 7, 6, 4, 1];

function reverseArray(arr) {
    let reverseNumbers = [];
    if (!Array.isArray(arr)) {
        return null
    } else {
        for (let i = arr.length - 1; i >= 0; i--) {
            reverseNumbers.push(arr[i]);

        }
    }
    return reverseNumbers
}

console.log(reverseArray(numbers));