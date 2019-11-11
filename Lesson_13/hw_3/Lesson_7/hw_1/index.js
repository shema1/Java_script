export function squareArray(arr) {

    if (Array.isArray(arr)) {
        const newArr = arr.map(element => element * element);

        return newArr

    } else {
        return null
    }
}


let test = [10, 6, 1, 5, 2];

console.log(squareArray(test));