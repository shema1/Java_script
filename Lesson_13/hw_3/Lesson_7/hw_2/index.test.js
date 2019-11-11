import { reverseArray } from './index';



it('input must be array', () => {
    const result = squareArray(2);

    expect(result).toEqual(null);
});

it('Only numbers', () => {
    const result = reverseArray('test');
    expect(result).toEqual(null);
});

it('must be reversed ', () => {
    const result = reverseArray([1, 2, 3]);

    expect(result).toEqual([3, 2, 1]);
});