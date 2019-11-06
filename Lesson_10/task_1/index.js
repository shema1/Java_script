const getFiniteNumbers = arr =>
    arr.filter(i => Number.isFinite(i));

const getFiniteNumbersV2 = arr => arr
    .filter(i => isFinite(i));

const getNaN = arr => arr
    .filter(i => Number.isNaN(i));

const getNaNV2 = arr => arr
    .filter(i => isNaN(i));

const getIntegers = arr => arr
    .filter(i => Number.isInteger(i));