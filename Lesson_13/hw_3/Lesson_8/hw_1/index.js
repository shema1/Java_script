export function pickProps(obj, arr) {
    let testObj = {};

    for (let i of arr) {
        for (const key in obj) {
            if (i == key) {
                testObj[key] = obj[key]
            }
        }

    }
    return testObj
}