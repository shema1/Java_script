class Order {

    constructor(price, city, type) {
        this.id = `${Math.floor(0 + Math.random() * (100 + 1 - 0))}`;
        this.price = price;
        this.city = city;
        this.type = type;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = null;
    }

    checkPrice() {
        if (this.price < 1000) {
            return false
        }
        console.log('work')
        return true;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date()
    }

    isValidType() {
        if (this.type == 'Buy' || this.type == 'Sell') {
            return true
        }
        return false
    }
}

export { Order }