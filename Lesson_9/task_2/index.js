const copyObj = obj => Object
    .assign({}, obj);

const user = {
    name: 'tom',
    age: 22
}

console.log(copyObj(user));