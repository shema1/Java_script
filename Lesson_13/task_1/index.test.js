it('17 = 17', () => {
    expect(17).toEqual(17);
});


it('18 = 17', () => {
    expect(18).toEqual(17);
});

const getEvenNumbers = numbers =>
    numbers.filter(num => num % 2 == 0)

it('should get only even numbers from array', () => {
    const result = getEvenNumbers([1, 2, 3, 4]);

    expect(result).toEqual([2, 4]);
});