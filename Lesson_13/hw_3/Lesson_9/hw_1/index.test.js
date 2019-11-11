import { getCustomersList } from './index';



it('input must be obj ', () => {
    const result = getCustomersList({
        'customer-id-1': {
            name: 'William',
            age: 54
        },
        'customer-id-2': {
            name: 'Tom',
            age: 17
        },
    });
    expect(result).toEqual([
        { name: 'Tom', age: 17, id: 'customer-id-2' },
        { name: 'William', age: 54, id: 'customer-id-1' }
    ])
});

it('result must be array ', () => {
    const result = getCustomersList({});
    expect(result).toEqual([])
});