/*Crea un Decorator en un arxiu que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió
del fitxer adjunt currency_conversions.json en funció de la divisa original
Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises incials, aplicant diferents conversions 
que usin el Decorator del punt anterior
*/

const data = require('./data')
class Conversor {
    constructor(nom) {
        this.nom = nom;
    }
}
const calculadora1 = new Conversor('La calculadora)

calculadora1.convertDivisa = function(value) {
   return value
};

//console.log(data);

var User = function (name) {
    this.name = name;

    this.say = function () {
        console.log("User: " + this.name);
    };
}

var DecoratedUser = function (user, street, city) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.street = street;
    this.city = city;

    this.say = function () {
        console.log("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    };
}

function run() {

    var user = new User("Kelly");
    user.say();

    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();
}