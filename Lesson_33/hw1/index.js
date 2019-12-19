const getValueWithDelay = (value, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(value);
            resolve(value)
        }, delay);
    });
};

const asyncNum1 = getValueWithDelay(undefined, 2000);
const asyncNum2 = getValueWithDelay('15', 4000);
const asyncNum3 = getValueWithDelay(10, 5000);
const asyncNum4 = getValueWithDelay(25, 6000);

const getSum = (numbers) =>
    numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Can\'t calculate')));
};

// asyncSum(asyncNum1, asyncNum2, asyncNum3)
//     .then(result => console.log(result));