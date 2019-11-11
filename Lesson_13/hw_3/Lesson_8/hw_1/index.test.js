import { pickProps } from './index';


it('the first argument must be obj ', () => {
    const result = pickProps(['a', 'c'], ['a', 'c']);
    expect(result).toEqual(null)
});

it('result must be obj ', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: 3 })
});