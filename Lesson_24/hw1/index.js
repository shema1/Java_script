function getDiff(startDate, endDate) {
    const d = 1000 * 60 * 60 * 24;
    const h = 1000 * 60 * 60;
    const m = 1000 * 60;


    const diff = Math.abs(endDate - startDate);

    const day = Math.trunc(diff / d);
    const daysInMs = day * d;
    const diffDays = diff - daysInMs;

    const hours = Math.trunc(diffDays / h);
    const minInMs = diffDays - (hours * h)

    const min = Math.trunc(minInMs / (m));

    const sec = Math.trunc((minInMs - (min * m)) / 1000);

    return `${day}d ${hours}h ${min}m ${sec}s`
}

// console.log(getDiff(startDate, endDate))
export { getDiff }