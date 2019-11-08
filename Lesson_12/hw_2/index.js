let test = [' 1.9 ', '16.4', 17, ' 1 dollar '];

const cleanTransactionsList = arr => {

    res = arr.filter(i => typeof + i === 'number').map(i => '$' + Number(i).toFixed(2));
    return res;

}

console.log(cleanTransactionsList(test));