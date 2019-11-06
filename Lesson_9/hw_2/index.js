function getPeople(obj) {

    const arr = Object.values(obj).map(i => i.map(i => i.name))
        .flat();

    return arr
}