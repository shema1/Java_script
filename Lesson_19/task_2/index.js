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
        if (obj.hasOwnProperty(prop) && typeof obj[prop] != 'function') {
            arr.push(prop)
        }
    }
    return arr;
}

console.log(getOwnProps(ship))

export { getOwnProps }