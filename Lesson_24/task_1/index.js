const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

function dayOfWeek(date, days) {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    return weekDays[new Date(dateInFuture).getDay()];
}

// const result = dayOfWeek(new Date(2013, 0, 1), 14)
// console.log(result)

export { getDayOfWeek };