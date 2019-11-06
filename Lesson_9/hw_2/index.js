rooms = {
    room1: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' },

    ],
    room2: [
        { name: 'room2 name1' },

    ],
    room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },

    ],

};


function getPeople(obj) {

    const arr = Object.values(obj).map(i => i.map(i => i.name))
        .reduce((a, i) => a.concat(i), []);

    return arr
}

console.log(getPeople(rooms));

console.log(rooms)