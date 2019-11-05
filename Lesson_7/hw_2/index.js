function reveseArray(arr) {
    if (!Array.isArray(arr)) {
        return null
    }

    return arr.reverse()
}

let test = [10, 6, 1, 5, 2];

console.log(reveseArray(test));