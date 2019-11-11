import { increaser } from './index.js'

it('parameter a must be bigger index', () => {
    const result = getSum(1, 20);
    expect(result).toEqual(null);
});

it('parameter a must be integer', () => {
    const result = getSum(2.2, 2.2130);
    expect(result).toEqual(null);
});

it('Only numbers ', () => {
    const result = getSum(2.2, '10');
    expect(result).toEqual(null);
});