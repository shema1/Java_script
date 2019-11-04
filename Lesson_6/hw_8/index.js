const numbers = [80, 22, 78, 6, 14, 111];

function cloneArr(arr) {
    let newNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        newNumbers.push(arr[i]);

    }

    return newNumbers;
}

console.log(cloneArr(numbers));