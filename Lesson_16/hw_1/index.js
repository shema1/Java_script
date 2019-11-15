const createArrayOfFunctions = (num) => {

    if (num == undefined) return []

    if (typeof num !== 'number') return null


    for (let i = 0; i < num; i++) {
        let arr = [];
        arr[i] = function() {
            return i;
        }
    }
    return arr
}

export { createArrayOfFunctions }