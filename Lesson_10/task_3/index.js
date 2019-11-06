const flatArray = arr => {
    const flatArray = arr
        .reduce((acc, elem) => {
            return acc.concat(elem);
        }, [])
    return flatArray;
}