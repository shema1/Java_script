import { getPrimes } from './index.js';

it('input must be bigger 0', () => {
    const result = getSum(20);
    expect(result).toEqual(null);
});

it('Only numbers', () => {
    const result = getSum('test');
    expect(result).toEqual(null);
});

it('Only integer number', () => {
    const result = getSum(20.25454);
    expect(result).toEqual(null);
});