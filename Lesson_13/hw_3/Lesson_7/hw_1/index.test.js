import { squareArray } from './index';


it('input must be array', () => {
    const result = squareArray([]);
    expect(result).toEqual([]);
});

it('Only numbers', () => {
    const result = squareArray('test');
    expect(result).toEqual(null);
});

it('input array must be bigger 0', () => {
    const result = squareArray([0]);
    expect(result).toEqual(null);
});