const numbers = [1, 2, 2, 3, 3, 4, 5, 6];

function uniqueCount(arr) {

    let count = 0;
    let uniqueNumbers = [];

    for (let i = 0; i < arr.length; i++) {

        if (uniqueNumbers.indexOf(arr[i]) < 0) {
            uniqueNumbers.push(arr[i]);
            count++;
        }


    }
    return count;
}

console.log(uniqueCount(numbers));