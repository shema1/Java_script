function getCustomersList(obj) {
    let arr = Object.entries(obj);
    let test = [];

    arr.map(i => i.id = i);
    arr.forEach(i => test.push(i[1]));

    return test.sort((a, b) => a.age > b.age ? 1 : -1)
}