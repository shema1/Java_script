const createArrayOfFunctions = (num) => {
    let arr = [];
    if (num == undefined) {
        return arr
    } else if (typeof num == 'number') {

        for (let i = 0; i < num; i++) {
            arr[i] = function() {
                return i;
            }
        }
        return arr
    } else {
        console.log('only number')
        return null
    }
}

export { createArrayOfFunctions }