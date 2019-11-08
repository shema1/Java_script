const cleanTransactionsList = arr => {

    res = arr.filter(i => !isNaN(i)).map(i => '$' + Number(i).toFixed(2));
    return res;

}