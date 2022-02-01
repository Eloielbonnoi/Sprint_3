
'use strict'

const Middleware = require('./middleware');
const numeros = require('./numeros.json');


const calculadora = (operacio, valors) => {
    let resultat;
    
    switch (operacio) {
        case 'suma': resultat = valors.reduce((a, b) => a + b); break;
        case 'resta': resultat = valors.reduce((a, b) => a - b); break;
        case 'multiplicacio': resultat = valors.reduce((a, b) => a * b); break;
        default: break;
    }
    
    return resultat;
};

// console.log(calculadora('suma', [numeros[0].a, numeros[0].b]))

const middleware = new Middleware();

middleware.use(function (info, next) {
    console.log(`El numero ${numeros[1].a} elevat a ${numeros[1].b} es igual a ${numeros[1].a*numeros[1].b}`); 
    next();
});

middleware.use(function (info, next) {
    console.log(`El cub ${numeros[1].a} elevat a ${numeros[1].b} es igual a ${numeros[1].a ** numeros[1].b}`); 
    next();
});

middleware.use(function (info, next) {
    console.log(`La divisió de ${numeros[1].a} entre ${numeros[1].b} es igual a ${numeros[1].a / numeros[1].b}`);
    next();
});

// Run the middleware with initial value
middleware.run(calculadora('suma', [numeros[1].a, numeros[1].b]));