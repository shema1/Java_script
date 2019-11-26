const ship = {
    name: 'Aurora',
    hasWeels: false,
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        ship.move()
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
        ship.stop()
    },
};

function getOwnProps(obj) {
    let arr = []

    for (let prop in obj) {
        console.log(typeof(obj[prop]))
            // if (obj.hasOwnProperty(prop) && typeof) {
            //     arr.push(prop)
            // }
    }
    return arr;
}

console.log(getOwnProps(ship))