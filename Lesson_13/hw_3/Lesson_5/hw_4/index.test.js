import { compareSums } from './index';

it('input parametrs must be bigger 0', () => {
    const result = getSum(20, 0, 0, 0);
    expect(result).toEqual(null);
});

it('Only numbers', () => {
    const result = getSum('test');
    expect(result).toEqual(null);
});

it('Only integer number', () => {
    const result = getSum(20.25454, 12.2, 25, 1);
    expect(result).toEqual(null);
});