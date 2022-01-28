class Product {
    constructor(name, price, divisa) {
        this.name = name,
        this.price = price,
        this.divisa = divisa
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getDivisa(){
        return this.divisa;
    }
}

module.exports = Product;

