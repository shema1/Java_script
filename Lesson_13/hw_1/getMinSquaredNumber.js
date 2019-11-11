const test = arr => {

    if (!Array.isArray(arr) || arr.length < 1);

    let min = qwerty.map(i => Math.pow(i, 2));
    min = min.sort((a, b) => a > b ? 1 : -1);

    return min[0];
}

let qwerty = [10, 2, -3, 6, 1];

console.log(test(qwerty));