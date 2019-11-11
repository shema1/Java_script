import { getSum } from './index';


it('parameter a must be integer', () => {
    const result = getSum(2.2, 20);
    expect(result).toEqual(null);
});

it('parameter b must be integer', () => {
    const result = getSum(2.2, 20);
    expect(result).toEqual(null);
});

it('parameter a must be bigger 0', () => {
    const result = getSum(2.2, 20);
    expect(result).toEqual(null);
});

it('parameter b must be bigger 0', () => {
    const result = getSum(2.2, 20);
    expect(result).toEqual(null);
});