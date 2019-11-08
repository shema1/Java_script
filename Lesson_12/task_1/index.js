const calc = expression => {
    const a = expression.split(' ');
    let result;

    switch (a[1]) {
        case '+':
            result = Number(a[0]) + Number(a[2]);
            break;
        case '-':
            result = a[0] + a[2];
            break;
    }

    return expression + ' = ' + result;
}