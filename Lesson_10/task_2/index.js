const user = {
    name: 'Tom',
    age: 17
}



const concatProps = obj => {
    const arr = [];
    for (const key in obj) {
        arr.push(obj[key])
    }

    return arr;
}

console.log(concatProps(user));