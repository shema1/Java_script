const reverseString = str => {
    let result = str.split('').reverse().join('');

    if (typeof str !== 'string') {
        return null
    }
    return result;


}

console.log(reverseString('hello'));