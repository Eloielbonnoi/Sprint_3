/*Crea un Decorator en un arxiu que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió
del fitxer adjunt currency_conversions.json en funció de la divisa original
Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises incials, aplicant diferents conversions 
que usin el Decorator del punt anterior
*/
const Product = require('./Product');
const DecoratedProduct = require('./DecoratedProduct');

const guitarra = new Product('Guitarra elèctrica', 1500, "USD");
const plats = new Product('Plats Zildjian', 350, "CFH");
const pedal = new Product('Pedal distortion', 380, "jpy");
const pues = new Product('Púas', 3.75, "Cad");

const materialGrup = [guitarra, plats, pedal, pues]
console.log(pues.getPrice());

const guitarraDecorada = new DecoratedProduct(guitarra);
console.log(pues.calculaPreu());


