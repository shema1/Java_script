import { createArrayOfFunctions } from './index';

it('Only number', () => {
    const array = createArrayOfFunctions("test");

    expect(array).toEqual(null);
})

it('There are no input parameters, the result is an empty array', () => {
    const array = createArrayOfFunctions();

    expect(array).toEqual([]);
})