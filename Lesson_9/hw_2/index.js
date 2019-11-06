const getPeople = obj =>
    Object.values(obj).map(i => i.map(i => i.name))
    .flat();