const getParsedIntegers = arr => arr
    .map(i => Number.parseInt(i));


const getParsedIntegersV2 = arr => arr
    .map(i => parseInt(i));

const getParsedFloats = arr => arr
    .map(i => Number.parseFloat(i));

const getParsedFloatsV2 = arr => arr
    .map(i => parseFloat(i));