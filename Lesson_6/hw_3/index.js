const numbers = [8, 2, 7, 6, 4, 1, 58];

function sortAsc(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                let max = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = max;
            }

        }

    }

    return arr;

}



console.log(sortAsc(numbers));