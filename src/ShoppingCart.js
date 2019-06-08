
class ShoppingCart {
    constructor() {
        this.items = []
    }
    getItems() {
        return this.items
    }
    addItem(name,quantity,pricePerUnit) {
        return this.items.push({name,quantity,pricePerUnit})
    }
    clear() {
        return this.items.length = 0
    }
    total() {
        var sum = this.items.reduce((accumulator, currentItem) =>
        accumulator + currentItem.quantity * currentItem.pricePerUnit, 0)
        return sum
    }
}



module.exports = ShoppingCart