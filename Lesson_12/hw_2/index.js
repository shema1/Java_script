const cleanTransactionsList = arr => {

    res = arr.filter(i => typeof + i === 'number' && !isNaN(i)).map(i => '$' + Number(i).toFixed(2));
    return res;

}