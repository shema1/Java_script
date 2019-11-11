import getMinSquaredNumber from './getMinSquaredNumber.js';


it('Error array is empty', () => {
    const result = getMinSquaredNumber([10, 2, -3, 6, 1])
    expect(result).toEqual(1);
})

it('Error input parameter must be array', () => {
    const result = getMinSquaredNumber('string')
    expect(result).toEqual(Array.isArray(result));
})

it('Error array min length 1', () => {
    const result = getMinSquaredNumber([])
    expect(result).toEqual();
})