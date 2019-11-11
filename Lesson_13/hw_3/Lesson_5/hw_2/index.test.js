import { getPrimes } from './index.js';

it('input parametrs must be bigger 0', () => {
    const result = getSum(20, 0, 0, 0);
    expect(result).toEqual(null);
});

it('Only numbers', () => {
    const result = getSum('test');
    expect(result).toEqual(null);
});

it('Only integer number', () => {
    const result = getSum(27.1445, 5, 30.2, 6);
    expect(result).toEqual(null);
});