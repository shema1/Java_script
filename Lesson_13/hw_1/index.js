const reverseString = str => {
    if (typeof str !== 'string') {
        return null
    }

    let result = str.split('').reverse().join('');
    return result;


}

console.log(reverseString('hello'));