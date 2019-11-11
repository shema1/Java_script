import { findDivCount } from './index';

it('parameter a must be bigger 0', () => {
    const result = findDivCount(0, 20, 2);
    expect(result).toEqual(null);
});

it('parameter b must be bigger 0', () => {
    const result = findDivCount(20, 0, 2);
    expect(result).toEqual(null);
});

it('parameter n must be integer', () => {
    const result = findDivCount(10.2, 40.12312, 20);
    expect(result).toEqual(null);
});


it('Only numbers', () => {
    const result = findDivCount('test');
    expect(result).toEqual(null);
});