const wallet = {
    transactions: [1, 2, 8, 26, 99],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    }
};
console.log(wallet.getMax());
console.log(wallet.getMin())
export { wallet };