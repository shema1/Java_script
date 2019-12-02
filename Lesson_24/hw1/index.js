function getDiff(startDate, endDate) {
    const d = 1000 * 60 * 60 * 24;
    const h = 1000 * 60 * 60;
    const m = 1000 * 60;


    const diff = endDate - startDate;
    const day = Math.ceil(diff / d);


    const daysInMs = day * d;
    const diffDays = diff - daysInMs;
    const hours = Math.ceil(diffDays / (h));


    const minInMs = hours * h
    const diffHour = diffDays - minInMs;
    const min = Math.ceil(diffHour / (m));

    const secInMs = (min * m) / 1000;
    const sec = Math.ceil(diffHour - secInMs);

    return `d${day} h${hours} m${min} s${sec}`
}

export { getDiff }