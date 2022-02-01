/*
Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions)
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands incials en cadascuna de les operacions. 
Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent 
als valors abans del resultat final
*/
'use strict'
const data = require('./data.json')
const Middleware = require('./Middleware');

//Mètode get random number
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Valors per a operar
let operand1 = data[randomNum(1, 4)].num1;
let operand2 = data[randomNum(1, 4)].num2;
const numSwitch = randomNum(1, 4)

//Mètode switch operacions
function calcula(num, operand1, operand2){
    let resultat;
switch (num) {
    case 1:
        resultat = operand1 + operand2; //suma(operand1, operand2);
        console.log(`La suma del valor ${operand1} i del valor ${operand2} dóna de resultat ${resultat}`);
        break;
    case 2:
        resultat = operand1 - operand2; //resta(operand1, operand2);
        console.log(`La resta del valor ${operand1} menys el valor ${operand2} dóna de resultat ${resultat}`);
        break;
    case 3:
        resultat = operand1 * operand2; //multiplicacio(operand1, operand2);
        console.log(`La multiplicació del valor ${operand1} pel valor ${operand2} dóna de resultat ${resultat}`);
        break;
    default:
        console.log('Hi ha hagut un error');
        break;
}
return resultat
}

const middleware = new Middleware();

//Middleware
middleware.use(function (info, next) {
    let resultat = Math.pow(operand1, 2);
    console.log(`El cuadrat de ${operand1} és ${resultat}`)
    next();
});

middleware.use(function(info, next) {
    let resultat = Math.pow(operand1, 3);
    console.log(`El cub de ${operand1} és ${resultat}`)
    next();
});
middleware.use(function(info, next) {
    let resultat = operand1/operand2;
    console.log(`El resultat de dividir ${operand1} entre ${operand2} és ${resultat}`)
    next()
});



middleware.run(calcula(numSwitch, operand1, operand2));

//console.log(middleware.middlewares)

