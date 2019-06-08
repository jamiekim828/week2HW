class ShoppingCart {
    constructor(name,quantity,pricePerUnit) {
        this.name = name
        this.quantity = quantity
        this.pricePerUnit = pricePerUnit
        this.cart = []
    }
    addItem(name,quantity,pricePerUnit) {
        return cart.push(name,quantity,pricePerUnit)
    }
    clear(cart) {
        return cart.length = 0
    }
    total(totalPrice, pricePerUnit) {
        return cart
            .map((pricePerUnit) => {pricePerUnit * quantity})
            .reduce((totalPrice, pricePerUnit) => {
                return totalPrice + pricePerUnit
            }, 0)
    }
}


module.exports = ShoppingCart