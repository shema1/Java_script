const sortDesc = numbers => {
    const copy = number.slice();

    copy.sort((a, b) => b - a);

    return copy;
}