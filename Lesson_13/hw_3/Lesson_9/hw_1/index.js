const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    }
};



const getCustomersList = obj => {
    const copy = JSON.parse(JSON.stringify(obj));
    let arr = Object.entries(copy);
    let test = [];

    arr.map(i => i[1].id = i[0]);
    arr.forEach(i => test.push(i[1]));

    return test.sort((a, b) => a.age > b.age ? 1 : -1)
}

console.log(getCustomersList(customers));