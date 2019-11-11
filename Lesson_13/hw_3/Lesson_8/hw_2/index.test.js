import { getAdults } from './index';



it('input must be obj ', () => {
    const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });
    expect(result).toEqual({ "Bob": 18, "John Doe": 19 })
});

it('result must be obj ', () => {
    const result = getAdults({});
    expect(result).toEqual({})
});