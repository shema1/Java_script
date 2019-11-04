function getArrayBounds(arr) {
    if (Array.isArray) {
        return [arr.length, arr[0], arr[arr.length - 1]];
    }
    return null;
}

const numbers = [1, 2, 4];

const arrayBound = getArrayBounds(numbers);
console.log(arrayBound);