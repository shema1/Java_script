class Wallet {
    _count = count;

    getBalance() {
        return `${this._count}`
    }

    deposit(value) {
        return this._count += value;
    }

    withdraw(value) {
        if (this._count - value <= 0) {
            console.log('No enough funds')
            return;
        }
        return this._count -= value
    }
}

export { Wallet }

// let user = new Wallet(500);
// console.log(user.deposit(100))
// console.log(user.withdraw(150))
// console.log(user.getBalance())