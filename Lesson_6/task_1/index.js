function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {

        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];

}
const numbers = [1, 2, 4];

const arrayBound = getArrayBounds(numbers);
console.log(arrayBound);