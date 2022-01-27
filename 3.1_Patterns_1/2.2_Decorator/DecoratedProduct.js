const data = require('./data.json')
const product = require('./Product')
class DecoratedProduct {
    constructor(product){
        this.product = product;
    }

    calculaPreu() {
        const divisa = this.product.getDivisa().toUpperCase();
        const price = this.product.getPrice();
        let preuConvertit = 0;
        switch (divisa) {
            case 'USD':
                preuConvertit = price * (data["USD_EUR"]);
                break;
            case 'GBP':
                preuConvertit = price * (data["GBP_EUR"]);
                break;
            case 'CHF':
                preuConvertit = price * (data["CHF_EUR"]);
                break;
            case 'JPY':
                preuConvertit = price * (data["JPY_EUR"]);
                break;
            case 'CAD':
                preuConvertit = price * (data["CAD_EUR"]);
                break;
            case 'CNY':
                preuConvertit = price * (data["CNY_EUR"]);
                break;
            default:
                console.log('Hi ha hagut un error')
                break;
        }
        return preuConvertit;
    }
}
module.exports = DecoratedProduct;