import { calc } from './calculator';

it('message +', () => {
    const result = calc('2 + 2');
    expect(result).toEqual('2 + 2 = 4');
});

it('message -', () => {
    const result = calc('2 - 2');
    expect(result).toEqual('2 - 2 = 0');
});

it('message *', () => {
    const result = calc('2 * 2');
    expect(result).toEqual('2 * 2 = 4');
});

it('message /', () => {
    const result = calc('2 / 2');
    expect(result).toEqual('2 / 2 = 1');
});

it('input parameteris not string', () => {
    const result = calc(47);
    expect(result).toEqual(null);
});