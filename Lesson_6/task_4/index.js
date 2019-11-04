let numbers = [1, 32, 25, 78, 1, 0, 5, 8, 5, 88]

function swap(arr) {
    const [start, ...rest] = arr;
    return [...rest, start];
}

console.log(swap(numbers));