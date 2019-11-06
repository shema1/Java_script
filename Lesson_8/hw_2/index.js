const getAdults = obj => {
    let testObj = {}:
        for (const key in obj) {
            if (obj[key >= 18]) {
                testObj[key] = obj[key]
            }
        }
    return testObj;
}