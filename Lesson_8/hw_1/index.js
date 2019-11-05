function pickProps(obj, arr) {
    let testObj = {};

    for (let i = 0; i < arr.length; i++) {
        for (const key in obj) {
            if (i == key) {
                testObj[key] = obj[key]
            }
        }

    }
    return testObj
}