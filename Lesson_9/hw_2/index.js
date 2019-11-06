const getPeople = obj => {

    const arr = Object.values(obj).map(i => i.map(i => i.name))

    return arr.concat.apply([], arr)
}