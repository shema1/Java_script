const numbers = [10, 45, 99, 1, 65, 7, 12, 23];

function getSum(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) {
        return null
    } else {
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum
    }

}