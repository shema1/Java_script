function shmoment(date) {
    const result = new Date(date);

    const addFunctions = {
        milliseconds: (value) => result.setMilliseconds(result.getMilliseconds() + value),
        seconds: (value) => result.setSeconds(result.getSeconds() + value),
        minutes: (value) => result.setMinutes(result.getMinutes() + value),
        hours: (value) => result.setHours(result.getHours() + value),
        days: (value) => result.setDate(result.getDate() + value),
        months: (value) => result.setMonth(result.getMonth() + value),
        years: (value) => result.setFullYear(result.getFullYear() + value),
    };

    return {
        add(name, value) {
            addFunctions[name](value);
            return this;
        },
        subtract(name, value) {
            addFunctions[name](-value);
            return this;
        },
        result() {
            return new Date(result);
        },
    };
};
// console.log(new Date(2020, 0, 7, 17, 17, 17))
// console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result())
export { shmoment };