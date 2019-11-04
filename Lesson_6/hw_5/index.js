const numbers = [1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 8, 9, 10, 10];

function removeDuplicates(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) < 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDuplicates(numbers));