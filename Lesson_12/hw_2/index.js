const countOccurrences = (str, serch) => {

    if (serch === '') {
        return null;
    }

    return str.match(new RegExp(serch, 'g')).length;
}