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


function getCustomersList(obj) {
    let arr = Object.entries(obj);
    let test = [];


    for (let i = 0; i < arr.length; i++) {
        arr.id = test[i];
    }
    arr.forEach(i => test.push(i[1]));

    return test.sort((a, b) => a.age > b.age ? 1 : -1)
}

console.log(getCustomersList(customers));

// let arr = Object.values(customers);

// let arr2 = Object.entries(customers);

// console.log(arr)
// console.log(arr2)