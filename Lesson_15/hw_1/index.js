const createCalculator = () => {
    let calc = 0;

    return {
        add: function(num) {
            calc += num;
        },

        decrease: function(num) {
            calc -= num;
        },

        reset: function() {
            calc = 0;
        },

        getMemo: function() {
            return calc;
        }
    }
}

// const calculator1 = createCalculator();
// const calculator2 = createCalculator();
// calculator1.add(10)
// calculator2.add(15)
// console.log(calculator1.getMemo());
// console.log(calculator2.getMemo());
// console.log(calculator1.getMemo());

export { createCalculator }