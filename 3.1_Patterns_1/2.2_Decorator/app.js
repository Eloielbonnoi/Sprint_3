/*Crea un Decorator en un arxiu que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió
del fitxer adjunt currency_conversions.json en funció de la divisa original
Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises incials, aplicant diferents conversions 
que usin el Decorator del punt anterior
*/
const Product = require('./Product');
const DecoratedProduct = require('./DecoratedProduct');

//Objectes
const guitarra = new Product('Guitarra elèctrica', 1500, "USD");
const plat = new Product('Plats Zildjian', 8350, "Chf");
const pedal = new Product('Pedal distortion', 380, "jpy");
const pua = new Product('Púas', 3.75, "Cad");
const bombo = new Product('Bombo', 788.75, "CNY");

const materialGrup = [guitarra, plat, pedal, pua, bombo];

materialGrup.forEach((instrument => {
    console.log(`El preu en ${instrument.getDivisa().toUpperCase()} de ${instrument.getName()} és de ${instrument.getPrice()}`)
}
))

//Objectes decorats
const guitarraDecorada = new DecoratedProduct(guitarra);
const platDecorat = new DecoratedProduct(plat);
const pedalDecorat = new DecoratedProduct(pedal);
const puaDecorada = new DecoratedProduct(pua);
const bomboDecorat =new DecoratedProduct(bombo);

const materialGrupDecorated = [guitarraDecorada, bomboDecorat, platDecorat, pedalDecorat, puaDecorada]


materialGrupDecorated.forEach((instrument => {
    console.log(`El preu en € de ${instrument.getName()} és de ${instrument.getPrice()}`)
}
))



