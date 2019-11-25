import { user } from './index';

it('firstName or lastName is empty', () => {
    const result = user.getFullName();
    expect(result).toEqual('')
})