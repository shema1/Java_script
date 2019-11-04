const numbers = [80, 22, 78, 6, 14, 111];

function checker(arr) {

    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

    }

    if (max + min > 1000) {
        return true
    } else {
        return false
    }
}




console.log(checker(numbers));