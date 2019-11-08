const cleanTransactionsList = arr => {

    // res = arr.filter(i => !isNaN(i)).map(i => '$' + Number(i).toFixed(2));
    return arr.filter(i => !isNaN(i)).map(i => '$' + Number(i).toFixed(2));

}

console.log(cleanTransactionsList([' 1.9 ', '16.4', 17, ' 1 dollar ', ' 1.9 ', '16.4', 17, ' 1 dollar ', ' 1.9 ', '16.4', 17, ' 1 dollar ']));