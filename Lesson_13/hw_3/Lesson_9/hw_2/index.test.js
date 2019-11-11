import { getPeople } from './index';



it('input must be obj ', () => {
    const result = getPeople({
        room1: [
            { name: 'room1 name1' },
            { name: 'room1 name2' },
            { name: 'room1 name3' },
            { name: 'room1 name4' },
        ],
        room2: [
            { name: 'room3 name1' },
            { name: 'room3 name2' },
            { name: 'room3 name3' },
        ],
    })
    expect(result).toEqual(["room1 name1", "room1 name2", "room1 name3", "room1 name4", "room3 name1", "room3 name2", "room3 name3"]);
});

it('result must be obj ', () => {
    const result = getPeople({});
    expect(result).toEqual([])
});